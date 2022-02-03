import "@emotion/react";

import { ThemeType } from "../themes/ThemeType";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
