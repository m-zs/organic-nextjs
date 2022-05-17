import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar } from "src/types/api";
import * as S from "./link.styles";

export interface LinksProps {
  links: Navbar["data"]["attributes"]["links"];
  toggled: boolean;
}

export const Links: FC<LinksProps> = ({ links, toggled }) => {
  const { pathname } = useRouter();

  return (
    <S.Nav toggled={toggled}>
      {links.map(({ id, text, href }) => (
        <Link href={href} key={id} passHref>
          <S.StyledLink active={pathname === href}>{text}</S.StyledLink>
        </Link>
      ))}
    </S.Nav>
  );
};
