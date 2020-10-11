import { PartialThemeGenerator } from '.';
import color from '../quantum-ux/color';
import _text from '../quantum-ux/text';

export const text = {
  // fontSize: _text.fontSize,
  fontWeight: _text.fontWeight,
  // fontStyle: _text.fontStyle,
  letterSpacing: _text.letterSpacing,
  lineHeight: _text.lineHeight,

  medium: {
    fontWeight: _text.fontWeightMedium,
  },
  bold: {
    fontWeight: _text.fontWeightBold,
  },
  semiBold: {
    fontWeight: _text.fontWeightSemiBold,
  },
  small: {
    fontSize: _text.fontSizeSmall,
  },
  large: {
    fontSize: _text.fontSizeLarge,
  },

  body: {
    fontSize: _text.bodyFontSize,
    // fontStyle: _text.bodyFontStyle,
    // fontWeight: _text.bodyFontWeight,
  },

  caption: {
    fontSize: _text.captionFontSize,
    fontWeight: _text.captionFontWeight,
    textTransform: _text.captionTextTransform,
    letterSpacing: _text.captionLetterSpacing,
  },

  code: {
    backgroundColor: {
      dark: _text.codeBackgroundColorDark,
      light: _text.codeBackgroundColor,
    },
  },

  disabled: {
    color: {
      dark: color.textDisabled,
      light: color.textDisabledDark,
    },
  },

  emphasis: {
    color: {
      dark: color.textEmphasis,
      light: color.textEmphasisDark,
    },
  },

  headline1: {
    fontSize: _text.headline1FontMarginBottom,
    fontStyle: _text.headline1FontStyle,
    fontWeight: _text.headline1FontWeight,
    letterSpacing: _text.headline1LetterSpacing,
    marginTop: _text.headline1FontMarginTop,
    marginBottom: _text.headline1FontMarginBottom,
    textTransform: _text.headline1TextTransform,

    bold: {
      fontWeight: _text.headline1FontWeightBold,
    },
  },

  headline2: {
    fontSize: _text.headline2FontMarginBottom,
    fontStyle: _text.headline2FontStyle,
    fontWeight: _text.headline2FontWeight,
    letterSpacing: _text.headline2LetterSpacing,
    marginTop: _text.headline2FontMarginTop,
    marginBottom: _text.headline2FontMarginBottom,
    textTransform: _text.headline2TextTransform,

    bold: {
      fontWeight: _text.headline2FontWeightBold,
    },
  },

  headline3: {
    fontSize: _text.headline3FontMarginBottom,
    fontStyle: _text.headline3FontStyle,
    fontWeight: _text.headline3FontWeight,
    letterSpacing: _text.headline3LetterSpacing,
    marginTop: _text.headline3FontMarginTop,
    marginBottom: _text.headline3FontMarginBottom,
    textTransform: _text.headline3TextTransform,

    bold: {
      fontWeight: _text.headline3FontWeightBold,
    },
  },

  headline4: {
    fontSize: _text.headline4FontMarginBottom,
    fontStyle: _text.headline4FontStyle,
    fontWeight: _text.headline4FontWeight,
    letterSpacing: _text.headline4LetterSpacing,
    marginTop: _text.headline4FontMarginTop,
    marginBottom: _text.headline4FontMarginBottom,
    textTransform: _text.headline4TextTransform,

    bold: {
      fontWeight: _text.headline4FontWeightBold,
    },
  },

  headline5: {
    fontSize: _text.headline5FontMarginBottom,
    fontStyle: _text.headline5FontStyle,
    fontWeight: _text.headline5FontWeight,
    letterSpacing: _text.headline5LetterSpacing,
    marginTop: _text.headline5FontMarginTop,
    marginBottom: _text.headline5FontMarginBottom,
    textTransform: _text.headline5TextTransform,

    bold: {
      fontWeight: _text.headline5FontWeightBold,
    },
  },

  headline6: {
    fontSize: _text.headline6FontMarginBottom,
    fontStyle: _text.headline6FontStyle,
    fontWeight: _text.headline6FontWeight,
    // letterSpacing: _text.headline6LetterSpacing,
    marginTop: _text.headline6FontMarginTop,
    marginBottom: _text.headline6FontMarginBottom,
    textTransform: _text.headline6TextTransform,

    bold: {
      fontWeight: _text.headline6FontWeightBold,
    },
  },

  helpBlock: {
    color: {
      dark: _text.helpBlockColorDark,
      light: _text.helpBlockColor,
    },
    fontSize: _text.helpBlockFontSize,
    fontStyle: _text.helpBlockFontStyle,
    fontWeight: _text.helpBlockFontWeight,
    marginTop: _text.helpBlockMarginTop,
    marginBottom: _text.helpBlockMarginBottom,
  },

  html: {
    fontSize: _text.htmlFontSize,
    // fontStyle: _text.htmlFontStyle,
    // fontWeight: _text.htmlFontWeight,
  },

  muted: {
    color: {
      dark: color.textMuted,
      light: color.textMutedDark,
    },
  },

  title: {
    fontSize: _text.titleFontSize,
    fontStyle: _text.titleFontStyle,
    fontWeight: _text.titleFontWeight,
    textTransform: _text.titleTextTransform,
  },

  required: {
    color: _text.fontColorRequired,
    content: _text.contentRequired,
    fontSize: _text.fontSizeRequired,
  },

  navigation: {
    primary: {
      fontSize: _text.navigationPrimaryFontSize,
      fontWeight: _text.navigationPrimaryFontWeight,
      fontStyle: _text.navigationPrimaryFontStyle,
      textTransform: _text.navigationPrimaryTextTransform,
      letterSpacing: _text.navigationPrimaryLetterSpacing,
      active: {
        fontWeight: _text.navigationPrimaryFontWeightActive,
      },
    },
    secondary: {
      fontSize: _text.navigationSecondaryFontSize,
      fontWeight: _text.navigationSecondaryFontWeight,
      fontStyle: _text.navigationSecondaryFontStyle,
      textTransform: _text.navigationSecondaryTextTransform,
      letterSpacing: _text.navigationSecondaryLetterSpacing,
    },
  },

  primary: {
    color: {
      dark: color.textPrimaryDark,
      light: color.textPrimary,
    },
  },

  secondary: {
    color: {
      dark: color.textSecondaryDark,
      light: color.textSecondary,
    },
    fontSize: _text.secondaryFontSize,
    fontStyle: _text.secondaryFontStyle,
    fontWeight: _text.secondaryFontWeight,
    textTransform: _text.secondaryTextTransform,
  },

  selection: {
    background: {
      dark: _text.backgroundColorSelectionDark,
      light: _text.backgroundColorSelection,
    },
    color: {
      dark: _text.colorSelectionDark,
      light: _text.colorSelection,
    },
  },

  tooltip: {
    fontSize: _text.tooltipFontSize,
  },
};

const generator: PartialThemeGenerator<'text'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    text,
  };
};

export default generator;
