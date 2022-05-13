import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Popper } from "./popper.component";

export default { component: Popper } as ComponentMeta<typeof Popper>;

export const Primary: ComponentStory<typeof Popper> = () => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  return (
    <div>
      <button
        style={{ margin: "auto", display: "block" }}
        ref={setContainer}
        onClick={(e) =>
          setContainer((container) => (!container ? e.currentTarget : null))
        }
      >
        toggle popper
      </button>

      <Popper container={container}>popper content</Popper>
    </div>
  );
};
