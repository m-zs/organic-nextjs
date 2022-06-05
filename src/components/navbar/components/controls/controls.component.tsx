import { FC, useState } from "react";
import { useRouter } from "next/router";
import { useLocalization } from "src/context/localization";
import { defaultLocale } from "src/utils/const";
import { Popper } from "src/components/popper";
import { Pin } from "src/components/icons/pin.component";
import * as S from "./controls.styles";

export const Controls: FC = () => {
  const { t } = useLocalization();
  const { pathname, replace, locales, locale: currentLocale } = useRouter();
  const [localePicker, setLocalePicker] = useState<HTMLButtonElement | null>(
    null
  );

  return (
    <S.Controls>
      <S.ControlButton
        role="button"
        active={!!localePicker}
        onClick={(e) =>
          setLocalePicker((container) => (!container ? e.currentTarget : null))
        }
        onMouseEnter={(e) => setLocalePicker(e.currentTarget)}
        onMouseLeave={() => setLocalePicker(null)}
      >
        <Pin />

        <Popper container={localePicker}>
          <S.PopperContent>
            {locales?.map((locale) => {
              if (
                currentLocale === locale ||
                (!currentLocale && locale === defaultLocale)
              ) {
                return null;
              }

              return (
                <S.LocaleButton
                  data-testid="locale-btn"
                  data-locale={locale}
                  key={locale}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    const path =
                      locale === defaultLocale ? "" : locale + pathname;
                    replace(path, path, { locale });
                  }}
                >
                  {t(`locales.${locale}`)}
                </S.LocaleButton>
              );
            })}
          </S.PopperContent>
        </Popper>
      </S.ControlButton>
    </S.Controls>
  );
};
