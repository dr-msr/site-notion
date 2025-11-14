import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  indigoDark,
  amber,
  sand,
  orange,
  brown,
} from "@radix-ui/colors"

export type Colors = typeof colors.light & typeof colors.dark

export const colors = {
  light: {
    ...amber,
    ...sand,
    ...orange,
    ...brown,
    // Override with warm tones for sepia effect
    gray1: sand.sand1,
    gray2: sand.sand2,
    gray3: sand.sand3,
    gray4: sand.sand4,
    gray5: sand.sand5,
    gray6: sand.sand6,
    gray7: sand.sand7,
    gray8: sand.sand8,
    gray9: sand.sand9,
    gray10: sand.sand10,
    gray11: sand.sand11,
    gray12: sand.sand12,
  },
  dark: {
    ...indigoDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
}
