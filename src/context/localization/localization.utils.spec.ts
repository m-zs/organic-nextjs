import faker from "faker";
import { getPathValue } from "./localization.utils";

describe("localization utils", () => {
  describe("getPathValue", () => {
    const object = {
      a: { b: { c: faker.datatype.uuid(), d: faker.datatype.uuid() } },
    };

    it("should return key if path is invalid", () => {
      const key = "a.b.c.d.e";
      const result = getPathValue({ key, object });

      expect(result).toBe(key);
    });

    it("should return default value if path is invalid", () => {
      const key = "a.b.c.d.e";
      const defaultValue = faker.random.word();
      const result = getPathValue({ key, object, defaultValue });

      expect(result).toBe(defaultValue);
    });

    it("should return targeted value", () => {
      const result = getPathValue({ key: "a.b.c", object });

      expect(result).toBe(object.a.b.c);
    });
  });
});
