import * as faker from "faker";
import { customRender, screen } from "src/utils/test";
import { Links, LinksProps } from "./links.component";

jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({ pathname: "" })),
}));

describe("Navbar/Links", () => {
  const setup = (props: LinksProps) => {
    customRender(<Links {...props} />);
  };

  it("should render links", () => {
    const props: LinksProps = {
      links: Array.from(new Array(faker.datatype.number(10)), () => ({
        id: faker.datatype.number(),
        text: faker.lorem.word(),
        href: faker.internet.url(),
      })),
      toggled: false,
    };

    setup(props);
    expect(screen.getAllByRole("link").length).toBe(props.links.length);
  });
});
