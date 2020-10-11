import buttonFlat from '../../../quantum-ux/button-flat';
import buttonFlatDivider from '../../../quantum-ux/button-flat-divider';
import ColorScheme from '../../ColorScheme';
import { normalize } from '../../../utils/pick';
import baseStyle from '../base/default';

export interface NoBorderColorScheme
  extends Pick<ColorScheme, 'backgroundColor' | 'boxShadow' | 'color'> {}

export interface OptionalBorderColorScheme
  extends NoBorderColorScheme,
    Partial<Pick<ColorScheme, 'borderColor'>> {}

export interface FlatButtonStyle extends OptionalBorderColorScheme {
  borderRadius: string;
  borderStyle: string;
  fontSize: string;
  fontWeight: string;
  height: string;
  iconLabelGap: string;
  iconLabelVerticalAlign: string;
  letterSpacing: string;
  lineHeight: string;
  margin: string;
  marginBottom: string;
  marginLeft: string;
  marginRight: string;
  marginTop: string;
  maxWidth: string;
  minWidth: string;
  padding: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  textShadow: string;
  textTransform: string;
  transition: string;

  active: OptionalBorderColorScheme;
  disabled?: OptionalBorderColorScheme;
  focus: ColorScheme;
  hover: OptionalBorderColorScheme;

  divider: {
    color: normalize;

    disabled?: {
      color: normalize;
    };
  };
}

export const defaultStyle: FlatButtonStyle = {
  backgroundColor: baseStyle.backgroundColor,
  borderColor: baseStyle.borderColor,
  borderRadius: buttonFlat.borderRadius,
  borderStyle: buttonFlat.border,
  boxShadow: {
    dark: buttonFlat.boxShadow,
    light: buttonFlat.boxShadow,
  },
  color: baseStyle.color,
  fontSize: buttonFlat.fontSize,
  fontWeight: buttonFlat.fontWeight,
  height: buttonFlat.height,
  iconLabelGap: buttonFlat.iconLabelGap,
  iconLabelVerticalAlign: buttonFlat.iconLabelVerticalAlign,
  letterSpacing: buttonFlat.letterSpacing,
  lineHeight: buttonFlat.lineHeight,
  margin: buttonFlat.margin,
  marginBottom: buttonFlat.marginBottom,
  marginLeft: buttonFlat.marginLeft,
  marginRight: buttonFlat.marginRight,
  marginTop: buttonFlat.marginTop,
  maxWidth: buttonFlat.maxWidth,
  minWidth: buttonFlat.minWidth,
  padding: buttonFlat.padding,
  paddingBottom: buttonFlat.paddingBottom,
  paddingLeft: buttonFlat.paddingLeft,
  paddingRight: buttonFlat.paddingRight,
  paddingTop: buttonFlat.paddingTop,
  textShadow: buttonFlat.textShadow,
  textTransform: buttonFlat.textTransform,
  transition: buttonFlat.transition,

  active: {
    backgroundColor: baseStyle.active.backgroundColor,
    boxShadow: {
      dark: buttonFlat.boxShadowActiveDark,
      light: buttonFlat.boxShadowActive,
    },
    color: baseStyle.active.color,
  },

  focus: {
    backgroundColor: baseStyle.focus.backgroundColor,
    borderColor: {
      dark: buttonFlat.borderColorFocusDark,
      light: buttonFlat.borderColorFocus,
    },
    boxShadow: {
      dark: buttonFlat.boxShadowFocusDark,
      light: buttonFlat.boxShadowFocus,
    },
    color: baseStyle.focus.color,
  },

  hover: {
    backgroundColor: baseStyle.hover.backgroundColor,
    boxShadow: {
      dark: buttonFlat.boxShadowHoverDark,
      light: buttonFlat.boxShadowHover,
    },
    color: baseStyle.hover.color,
  },

  divider: {
    color: {
      dark: buttonFlatDivider.colorDark,
      light: buttonFlatDivider.color,
    },
  },
};

export default defaultStyle;
