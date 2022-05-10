import qs from "qs";
import { Layout } from "src/types/app";
import { Locale } from "src/types/internalization";
import { fetchFromCMS } from "./common";

export const fetchLayoutData = async (locale: Locale): Promise<Layout> => {
  const query = qs.stringify({
    populate: ["*"],
    locale,
  });

  return { navbar: await fetchFromCMS(`navbar?${query}`) };
};
