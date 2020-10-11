import { PartialThemeGenerator } from '.';
import text from '../quantum-ux/text';

export const anchor = {
  color: {
    dark: text.anchorFontColorDark,
    light: text.anchorFontColor,
  },
  fontSize: text.anchorFontSize,
  letterSpacing: text.anchorLetterSpacing,
  textDecoration: text.anchorTextDecoration,
  textTransform: text.anchorTextTransform,

  small: {
    fontSize: text.anchorFontSizeSmall,
  },

  hover: {
    textDecoration: text.anchorTextDecorationHover,
  },
};

const generator: PartialThemeGenerator<'anchor'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    anchor,
  };
};

export default generator;
