import { AttributesData } from "../common";

export interface NavLink {
  id: number;
  text: string;
  href: string;
}

export type Navbar = AttributesData<{
  links: NavLink[];
}>;
