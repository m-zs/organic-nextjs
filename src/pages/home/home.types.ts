import {
  Carousel,
  PageMetadata,
  PublishableAttributesData,
} from "src/types/api";

export type HomepageData = PublishableAttributesData<{
  locale: string;
  page_metadata: PublishableAttributesData<PageMetadata>;
  content_blocks: Record<number, PublishableAttributesData<{}>>;
  carousel: PublishableAttributesData<Carousel>;
}>;
