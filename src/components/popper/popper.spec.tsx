import { useState } from "react";
import * as faker from "faker";
import userEvent from "@testing-library/user-event";
import { render, screen } from "src/utils/test";
import { Popper, PopperProps } from "./popper.component";

describe("Popper", () => {
  const setup = (props?: Partial<PopperProps>) => {
    const Wrapper = () => {
      const [container, setContainer] = useState<HTMLElement | null>(null);

      return (
        <div>
          <button
            ref={setContainer}
            role="button"
            onClick={(e) =>
              setContainer((container) => (!container ? e.currentTarget : null))
            }
          />

          <Popper {...props}>
            <h1>{faker.lorem.word()}</h1>
          </Popper>
        </div>
      );
    };
    render(<Wrapper />);
  };

  it("should trigger popper content rendering on click", () => {
    setup();

    expect(screen.queryByRole("heading", { level: 1 })).not.toBeInTheDocument();
    userEvent.click(screen.getByRole("button"));
    expect(screen.queryByRole("heading", { level: 1 })).not.toBeInTheDocument();
  });
});
