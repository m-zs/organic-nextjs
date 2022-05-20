import * as faker from "faker";
import { customRender, screen } from "src/utils/test";
import { Navbar, NavbarProps } from "./navbar.component";

jest.mock("src/hooks/match-media", () => ({
  useMatchMedia: jest.fn(),
}));
jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({ pathname: "" })),
}));

describe("Navbar", () => {
  const setup = (props?: NavbarProps) => {
    const base: NavbarProps = {
      data: {
        id: faker.datatype.number(),
        attributes: {
          links: Array.from(new Array(faker.datatype.number(10)), () => ({
            id: faker.datatype.number(),
            text: faker.lorem.word(),
            href: faker.internet.url(),
          })),
        },
      },
    };

    customRender(<Navbar {...base} {...props} />);

    return { base };
  };

  it("should render navbar", () => {
    setup();

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
