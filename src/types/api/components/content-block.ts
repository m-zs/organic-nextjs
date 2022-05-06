import type { PublishableAttributesData } from "../common";
import type { Button, Image } from "./";

export interface ContentBlock {
  heading: string;
  description: string;
  image: PublishableAttributesData<Image>;
  button: Button;
}
