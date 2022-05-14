import { ReactNode } from "react";
import * as faker from "faker";
import { useLocalization, LocalizationProvider } from "./localization.provider";
import { render, screen } from "src/utils/test";

describe("localization provider", () => {
  const setup = ({ children }: { children: ReactNode }) => {
    const createTranslation = () => ({
      a: faker.random.word(),
      b: faker.random.word(),
      c: faker.random.word(),
    });
    const messages = {
      [faker.random.locale()]: createTranslation(),
      [faker.random.locale()]: createTranslation(),
    };
    const locale = Object.keys(messages)[0];

    const Consumer = () => {
      return (
        <LocalizationProvider locale={locale} messages={messages[locale]}>
          {children}
        </LocalizationProvider>
      );
    };

    render(<Consumer />);

    return { messages, locale };
  };

  it("should render translated strings", () => {
    const Children = () => {
      const { t } = useLocalization();

      return (
        <div>
          <h2>{t("a")}</h2>
          <h2>{t("b")}</h2>
          <h2>{t("c")}</h2>
        </div>
      );
    };

    const { messages, locale } = setup({ children: <Children /> });

    expect(screen.getByText(messages[locale].a)).toBeInTheDocument();
    expect(screen.getByText(messages[locale].b)).toBeInTheDocument();
    expect(screen.getByText(messages[locale].c)).toBeInTheDocument();
  });

  it("should render default values", () => {
    const defaultValues = [faker.random.word(), faker.random.word()];
    const Children = () => {
      const { t } = useLocalization();

      return (
        <div>
          <h2>{t("a.b.c.d", defaultValues[0])}</h2>
          <h2>{t("", defaultValues[1])}</h2>
        </div>
      );
    };

    setup({ children: <Children /> });

    expect(screen.getByText(defaultValues[0])).toBeInTheDocument();
    expect(screen.getByText(defaultValues[1])).toBeInTheDocument();
  });

  it("should render key values", () => {
    const keyValues = [faker.random.word(), faker.random.word()];
    const Children = () => {
      const { t } = useLocalization();

      return (
        <div>
          <h2>{t(keyValues[0])}</h2>
          <h2>{t(keyValues[1])}</h2>
        </div>
      );
    };

    setup({ children: <Children /> });

    expect(screen.getByText(keyValues[0])).toBeInTheDocument();
    expect(screen.getByText(keyValues[1])).toBeInTheDocument();
  });
});
