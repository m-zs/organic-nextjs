import type { AttributesData } from "../common";
import type { Slide } from "./slide";

export type Carousel = AttributesData<{
  slide: AttributesData<Slide>;
}>;
