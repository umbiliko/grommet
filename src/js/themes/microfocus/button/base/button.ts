import buttonSpec from '../../../quantum-ux/button';
import buttonCaret from '../../../quantum-ux/button-caret';
// import { undefinedColor } from '../../colors';

export const button = {
  borderColor: {
    dark: buttonSpec.borderColorDefaultDark,
    light: buttonSpec.borderColorDefault,
  },
  borderRadius: '0px', // spec.borderRadius,
  borderWidth: buttonSpec.borderWidth,
  boxShadow: {
    dark: buttonSpec.boxShadow,
    light: buttonSpec.boxShadow,
  },
  caret: buttonCaret,
  fontSize: buttonSpec.fontSize,
  fontWeight: buttonSpec.fontWeight,
  height: buttonSpec.height,
  iconLabelGap: buttonSpec.iconLabelGap,
  iconLabelVerticalAlign: buttonSpec.iconLabelVerticalAlign,
  letterSpacing: buttonSpec.letterSpacing,
  // letterSpacing: spec.global.text.captionLetterSpacing,
  lineHeight: buttonSpec.lineHeight,
  margin: buttonSpec.margin,
  marginBottom: buttonSpec.marginBottom,
  marginLeft: buttonSpec.marginLeft,
  marginRight: buttonSpec.marginRight,
  marginTop: buttonSpec.marginTop,
  maxWidth: buttonSpec.maxWidth,
  minWidth: buttonSpec.minWidth,
  // padding: spec.padding,
  padding: {
    horizontal: buttonSpec.paddingLeft,
    vertical: buttonSpec.paddingBottom,
  },
  paddingBottom: buttonSpec.paddingBottom,
  paddingLeft: buttonSpec.paddingLeft,
  paddingRight: buttonSpec.paddingRight,
  paddingTop: buttonSpec.paddingTop,
  textShadow: buttonSpec.textShadow,
  textTransform: buttonSpec.textTransform,
  transition: buttonSpec.transition,

  active: {
    boxShadow: {
      dark: buttonSpec.boxShadowActive,
      light: buttonSpec.boxShadowActive,
    },
  },

  disabled: {
    boxShadow: {
      dark: buttonSpec.backgroundColorDefaultDisabledDark,
      light: buttonSpec.backgroundColorDefaultDisabled,
      // dark: undefinedColor, // spec.boxShadowDisabledDark,
      // light: undefinedColor, // spec.boxShadowDisabled,
    },
  },

  hover: {
    boxShadow: {
      dark: buttonSpec.boxShadowHoverDark,
      light: buttonSpec.boxShadowHover,
    },
  },

  focus: {
    boxShadow: {
      dark: buttonSpec.boxShadowFocus,
      light: buttonSpec.boxShadowFocus,
    },
  },
};

export default button;
