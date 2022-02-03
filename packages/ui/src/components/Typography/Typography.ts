import Text from "./Text";
import { ThemeType } from "../../themes/ThemeType";

export interface TextProps {
  gutter?:
    | number
    | { top?: number; bottom?: number; left?: number; right?: number };
  align?: "left" | "center" | "right";
  bold?: boolean;
  medium?: boolean;
  inline?: boolean;
  color?: keyof ThemeType["colors"];
  underline?: boolean;
}

export const Typography = { Text };
