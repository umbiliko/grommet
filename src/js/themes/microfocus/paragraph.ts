import { PartialTheme, PartialThemeGenerator } from '.';
import text from '../quantum-ux/text';

export const paragraph = {
  fontSize: text.paragraphFontSize,
  fontStyle: text.paragraphFontStyle,
  fontWeight: text.paragraphFontWeight,
  letterSpacing: text.paragraphLetterSpacing,
  lineHeight: text.paragraphLineHeight,
  marginBottom: text.paragraphMarginBottom,

  bold: {
    fontWeight: text.paragraphFontWeightBold,
  },
  italic: {
    fontStyle: text.paragraphFontStyleItalic,
  },
  small: {
    fontSize: text.paragraphFontSizeSmall,
    lineHeight: text.paragraphLineHeightSmall,
    letterSpacing: text.paragraphLetterSpacingSmall,
  },
  large: {
    fontSize: text.paragraphFontSizeLg,
    lineHeight: text.paragraphLineHeightLg,
    letterSpacing: text.paragraphLetterSpacingLg,
  },
};

const generator: PartialThemeGenerator<'paragraph'> = ({
  baseSpacing = 24,
  scale = 6,
}): PartialTheme<'paragraph'> => {
  return {
    paragraph: {},
  };
};

export default generator;
