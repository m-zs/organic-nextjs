import qs from "qs";
import { Locale } from "src/types/internalization";
import { fetchFromCMS } from "src/utils/api";
import { fetchLayoutData } from "src/utils/api/layout";
import { Homepage, HomepageData } from "./home.types";

export const getHomeData = async (locale: Locale): Promise<Homepage> => {
  const query = qs.stringify({
    locale,
    populate: [
      "content_blocks.image",
      "content_blocks.button",
      "page_metadata",
      "carousel.slide.image",
      "carousel.slide.button",
    ],
  });

  const [page, layout] = await Promise.all([
    fetchFromCMS<HomepageData>(`homepage?${query}`),
    fetchLayoutData(locale),
  ]);

  return { page, layout };
};
