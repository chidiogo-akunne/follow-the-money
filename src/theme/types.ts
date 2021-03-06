import "styled-components";
import { configureFonts, DefaultTheme } from "react-native-paper";

// All app colors
enum COLORS {
  WHITE = "#FFFFFF",
  GREY = "#707070",
  DARK_GREY = "#9f9f9f",
  LIGHT_GREY = "#d1d1d1",
  ONLINE = "#7ED321",
  WARNING = "#F6A609",
  PRIMARY = "#b6190f",
  PRIMARY_LIGHT = "#8DA4FF",
  SECONDARY = "#A875FF",
  PRIMARY_TEXT = "#535D7E",
  SECONDARY_TEXT = "#666666",
  INACTIVE = "#bcbbbb",
  DISABLED = "#E8E8E8",
  ACTION = "#f6f6f6",
  TRANSPARENT = "transparent",
  OFFWHITE = "#FBFCFF",
  INPUT = "#f5f5f5",
  SYSTEM_COLOR = "#F5F5F5",
  BLACK = "#000000",
  RED = "#FB4E4E",
  PINK = "#ffebe9",
}

// All app font sizes
enum FONTS {
  SMALL_SIZE = 8,
  MEDIUM_SIZE = 12,
  LARGE_SIZE = 16,
  WORK_SANS_REGULAR = "workSansRegular",
  WORK_SANS_MEDIUM = "workSansMedium",
  WORK_SANS_SEMI_BOLD = "workSansSemiBold",
  WORK_SANS_BOLD = "workSansBold",
}

declare module "styled-components" {
  export interface DefaultTheme {
    // All Global App Colors
    colors: {
      WHITE: string;
      GREY: string;
      ONLINE: string;
      WARNING: string;
      PRIMARY: string;
      PRIMARY_LIGHT: string;
      SECONDARY: string;
      PRIMARY_TEXT: string;
      SYSTEM_COLOR: string;
      SECONDARY_TEXT: string;
      INACTIVE: string;
      DISABLED: string;
      ACTION: string;
      TRANSPARENT: string;
      OFFWHITE: string;
      INPUT: string;
      BLACK: string;
      RED: string;
      DARK_GREY: string;
      LIGHT_GREY: string;
      PINK: string;
    };

    // All Global App Font Sizes
    fonts: {
      SMALL_SIZE: number;
      MEDIUM_SIZE: number;
      LARGE_SIZE: number;
      WORK_SANS_REGULAR: string;
      WORK_SANS_MEDIUM: string;
      WORK_SANS_SEMI_BOLD: string;
      WORK_SANS_BOLD: string;
    };
  }
}

const paperFontConfig = {
  default: {
    regular: {
      fontFamily: FONTS.WORK_SANS_REGULAR,
      fontWeight: "normal",
    },

    medium: {
      fontFamily: FONTS.WORK_SANS_MEDIUM,
      fontWeight: "normal",
    },

    light: {
      fontFamily: FONTS.WORK_SANS_REGULAR,
      fontWeight: "normal",
    },

    thin: {
      fontFamily: FONTS.WORK_SANS_REGULAR,
      fontWeight: "normal",
    },
  },
};

export const paperTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.PRIMARY,
    accent: COLORS.SECONDARY,
    background: COLORS.WHITE,
    surface: COLORS.WHITE,
    text: COLORS.PRIMARY_TEXT,
    disabled: COLORS.DISABLED,
  },
  // @ts-ignore
  fonts: configureFonts(paperFontConfig),
};

// App theme
export const styledComponentTheme = { colors: COLORS, fonts: FONTS };
