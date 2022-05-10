import {
  Carousel,
  PageMetadata,
  PublishableAttributesData,
} from "src/types/api";
import { PageWithLayout } from "src/types/app";

export type HomepageData = PublishableAttributesData<{
  locale: string;
  page_metadata: PublishableAttributesData<PageMetadata>;
  content_blocks: Record<number, PublishableAttributesData<{}>>;
  carousel: PublishableAttributesData<Carousel>;
}>;

export type Homepage = PageWithLayout<HomepageData>;
