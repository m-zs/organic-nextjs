import type { PublishData } from "./publish";

export interface AttributesData<T, D = void> {
  data: {
    id: number;
    attributes: T & D;
  };
}

export type PublishableAttributesData<T> = AttributesData<T, PublishData>;
