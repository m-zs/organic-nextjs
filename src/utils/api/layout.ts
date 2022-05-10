import qs from "qs";
import { Layout } from "src/types/app";
import { Locale } from "src/types/internalization";
import { fetchFromCMS } from "./common";

// https://github.com/vercel/next.js/discussions/10949#discussioncomment-958694
// shared data cant be fetched from _app right now
export const fetchLayoutData = async (locale: Locale): Promise<Layout> => {
  const query = qs.stringify({
    populate: ["links"],
    locale,
  });

  return { navbar: await fetchFromCMS(`navbar?${query}`) };
};
