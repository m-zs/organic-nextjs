import qs from "qs";
import { fetchFromCMS } from "src/utils/api";
import { HomepageData } from "./home.types";

export const getHomeData = async (): Promise<HomepageData> => {
  const query = qs.stringify({
    populate: [
      "content_blocks.image",
      "content_blocks.button",
      "page_metadata",
      "carousel.slide.image",
      "carousel.slide.button",
    ],
  });

  return await fetchFromCMS(`homepage?${query}`);
};
