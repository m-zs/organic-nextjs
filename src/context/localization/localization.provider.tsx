import { Translation } from "next-i18next";
import { createContext, FC, ReactNode, useContext } from "react";
import { getPathValue } from "./localization.utils";

export interface LocalizationContext {
  locale: string;
  t: (key: string, defaultValue?: string) => string;
}

const LocalizationContext = createContext<LocalizationContext>(
  {} as LocalizationContext
);

export const useLocalization = () => useContext(LocalizationContext);

type Translation = { [key: string]: string | Translation | undefined };
export interface LocalizationProviderProps {
  children: ReactNode;
  locale: string;
  messages: Translation;
}

export const LocalizationProvider: FC<LocalizationProviderProps> = ({
  children,
  locale,
  messages,
}) => {
  const t = (key: string, defaultValue?: string) =>
    getPathValue({ key, defaultValue, object: messages });

  return (
    <LocalizationContext.Provider value={{ locale: locale, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};
