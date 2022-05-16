import * as faker from "faker";
import { customRender, screen } from "src/utils/test";
import { theme } from "src/styles";
import {
  Container,
  ContainerProps,
  ContainerSize,
} from "./container.component";

describe("Container", () => {
  const setup = (props: Omit<ContainerProps, "children"> = { size: "lg" }) => {
    const children = faker.datatype.uuid();

    customRender(<Container {...props}>{children}</Container>);

    return { children };
  };

  it("should render children component", () => {
    const { children } = setup();

    expect(screen.getByText(children)).toBeInTheDocument();
  });

  test.each(Object.keys(theme.containers))(
    "should render %p container",
    (size) => {
      const { children } = setup({ size: size as ContainerSize });

      expect(window.getComputedStyle(screen.getByText(children)).width).toBe(
        theme.containers[size as ContainerSize]
      );
    }
  );
});
