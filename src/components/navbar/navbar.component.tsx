import { FC, useEffect, useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import Link from "next/link";
import { Navbar as NavbarData } from "src/types/api";
import { useMatchMedia } from "src/hooks/match-media";
import { theme } from "src/styles";
import { Container } from "src/components/container";
import { Links } from "./components/links";
import { Controls } from "./components/controls";
import * as S from "./navbar.styles";

export type NavbarProps = NavbarData;

export const Navbar: FC<NavbarProps> = ({ data }) => {
  const mobile = useMatchMedia(theme.breakpoints.down("md"));
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!mobile) setActive(true);
  }, [mobile]);

  return (
    <Container size="lg">
      <S.Wrapper>
        <Link href="/" passHref>
          <S.Logo>ORGANIC</S.Logo>
        </Link>

        <Links links={data.attributes.links} toggled={active} />
        <Controls />
        <S.HamburgerContainer>
          <Hamburger
            size={20}
            color={theme.colors.common.white}
            hideOutline={false}
            direction="left"
            onToggle={() => setActive((state) => !state)}
            toggled={active}
          />
        </S.HamburgerContainer>
      </S.Wrapper>
    </Container>
  );
};
