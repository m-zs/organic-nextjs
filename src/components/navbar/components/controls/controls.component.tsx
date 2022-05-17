import { FC, useState } from "react";
import { useRouter } from "next/router";
import { useLocalization } from "src/context/localization";
import { defaultLocale } from "src/utils/const";
import { Popper } from "src/components/popper/";
import Pin from "src/assets/icons/pin.svg";
import * as S from "./controls.styles";

export const Controls: FC = () => {
  const { t } = useLocalization();
  const { pathname, replace, locales } = useRouter();
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
            {locales?.map((locale) => (
              <S.LocaleButton
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
            ))}
          </S.PopperContent>
        </Popper>
      </S.ControlButton>
    </S.Controls>
  );
};
