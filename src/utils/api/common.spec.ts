import faker from "faker";
import { buildBaseUrl } from "./common";

describe("utils/api/common", () => {
  describe("buildBaseUrl", () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...OLD_ENV };
    });

    it("should return valid url", () => {
      const api = faker.internet.domainName();
      const url = faker.random.word();

      process.env.API_URL = api;
      const result = buildBaseUrl(url);

      expect(result).toBe(`${api}/${url}`);
    });
  });
});
