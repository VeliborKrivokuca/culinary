import { ReactElement } from "react";

export interface Feature {
  id: number;
  icon: ReactElement;
  titleKey: string;
  descriptionKey: string;
}
