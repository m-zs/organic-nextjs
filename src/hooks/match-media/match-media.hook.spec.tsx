import { useEffect } from "react";
import { render } from "src/utils/test/test-utils";
import { useMatchMedia } from "./match-media.hook";

describe("useMatchMedia", () => {
  const onMatch = jest.fn();
  const onNoMatch = jest.fn();

  const setup = () => {
    jest.clearAllMocks();

    const Wrapper = () => {
      const isMatching = useMatchMedia("");

      useEffect(() => {
        if (isMatching) {
          onMatch();
        } else {
          onNoMatch();
        }
      }, [isMatching]);

      return null;
    };

    render(<Wrapper />);
  };

  it("should call function when mq is not matching", () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));

    setup();

    expect(onNoMatch).toHaveBeenCalled();
    expect(onMatch).not.toHaveBeenCalled();
  });

  it("should call function when mq is matching", () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: true,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));

    setup();

    expect(onMatch).toHaveBeenCalled();
    expect(onNoMatch).not.toHaveBeenCalled();
  });
});
