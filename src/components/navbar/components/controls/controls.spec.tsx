import { useRouter } from "next/router";
import * as faker from "faker";
import userEvent from "@testing-library/user-event";
import { customRender, screen, waitFor } from "src/utils/test";
import { Controls } from "./controls.component";

jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({ locales: [] })),
  replace: jest.fn(),
}));

describe("Navbar/Controls", () => {
  const setup = () => {
    customRender(<Controls />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render locales", async () => {
    const locales = Array.from(new Array(faker.datatype.number(10)), () =>
      faker.datatype.uuid()
    );
    (useRouter as jest.Mock).mockReturnValue({
      locales,
    });

    setup();

    userEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(screen.getAllByRole("button").length).toBe(locales.length + 1);
    });
  });

  it("should trigger on click function", async () => {
    const locales = Array.from(new Array(faker.datatype.number(10)), () =>
      faker.datatype.uuid()
    );
    const replace = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      locales,
      replace,
    });

    setup();

    userEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(screen.getByText("locales." + locales[0])).toBeInTheDocument();
    });

    screen.getByText("locales." + locales[0]).click();
    expect(replace).toHaveBeenCalledTimes(1);
  });
});
