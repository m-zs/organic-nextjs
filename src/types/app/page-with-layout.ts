import { Navbar } from "../api";

export interface Layout {
  navbar: Navbar;
}

export interface PageWithLayout<T> {
  page: T;
  layout: Layout;
}
