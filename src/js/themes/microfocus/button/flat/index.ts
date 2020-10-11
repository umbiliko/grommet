
import buttonFlat from '../../../quantum-ux/button-flat';
import buttonFlatDivider from '../../../quantum-ux/button-flat-divider';
import ColorScheme from '../../ColorScheme';
import { normalize } from '../../../utils/pick';
import button from '../base/button';
import buttonDivider from '../../../quantum-ux/button-divider';

const baseStyle = button.default;

export interface NoBorderColorScheme
  extends Pick<ColorScheme, 'background' | 'boxShadow' | 'color'> {}

export interface OptionalBorderColorScheme
  extends NoBorderColorScheme,
    Partial<Pick<ColorScheme, 'border'>> {}

export interface FlatButtonStyle extends OptionalBorderColorScheme {
  border: any;
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

  primary: any;
  secondary: any;
}

const theme: FlatButtonStyle = {
  background: baseStyle.background,
  border: {
    style: buttonFlat.border,
  },
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
    background: baseStyle.active.background,
    boxShadow: {
      dark: buttonFlat.boxShadowActiveDark,
      light: buttonFlat.boxShadowActive,
    },
    color: baseStyle.active.color,
  },

  focus: {
    background: baseStyle.focus.background,
    border: {
      color: {
        dark: buttonFlat.borderColorFocusDark,
        light: buttonFlat.borderColorFocus,
      },
    },
    boxShadow: {
      dark: buttonFlat.boxShadowFocusDark,
      light: buttonFlat.boxShadowFocus,
    },
    color: baseStyle.focus.color,
  },

  hover: {
    background: baseStyle.hover.background,
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

  primary: {
    background: {
      color: {
        dark: buttonFlat.backgroundColorPrimaryDark,
        light: buttonFlat.backgroundColorPrimary,
      },
    },
    color: {
      dark: buttonFlat.colorPrimaryDark,
      light: buttonFlat.colorPrimary,
    },
  
    active: {
      background: {
        color: {
          dark: buttonFlat.backgroundColorPrimaryActiveDark,
          light: buttonFlat.backgroundColorPrimaryActive,
        },
      },
      color: {
        dark: buttonFlat.colorPrimaryActiveDark,
        light: buttonFlat.colorPrimaryActive,
      },
      boxShadow: {
        dark: buttonFlat.boxShadowPrimaryActiveDark,
        light: buttonFlat.boxShadowPrimaryActive,
      },
    },
  
    disabled: {
      background: {
        color: {
          dark: buttonFlat.backgroundColorPrimaryDisabledDark,
          light: buttonFlat.backgroundColorPrimaryDisabled,
        },
      },
      color: {
        dark: buttonFlat.colorPrimaryDisabledDark,
        light: buttonFlat.colorPrimaryDisabled,
      },
      boxShadow: {
        dark: buttonFlat.boxShadowPrimaryDisabledDark,
        light: buttonFlat.boxShadowPrimaryDisabled,
      },
    },
  
    focus: {
      background: {
        color: {
          dark: buttonFlat.backgroundColorPrimaryFocusDark,
          light: buttonFlat.backgroundColorPrimaryFocus,
        },
      },
      border: {
        color: {
          dark: buttonFlat.borderColorFocusDark,
          light: buttonFlat.borderColorFocus,
        },
      },
      boxShadow: {
        dark: buttonFlat.boxShadowFocusDark,
        light: buttonFlat.boxShadowFocus,
      },
      color: {
        dark: buttonFlat.colorPrimaryFocusDark,
        light: buttonFlat.colorPrimaryFocus,
      },
    },
  
    hover: {
      background: {
        color: {
          dark: buttonFlat.backgroundColorPrimaryHoverDark,
          light: buttonFlat.backgroundColorPrimaryHover,
        },
      },
      color: {
        dark: buttonFlat.colorPrimaryHoverDark,
        light: buttonFlat.colorPrimaryHover,
      },
      boxShadow: {
        dark: buttonFlat.boxShadowPrimaryHoverDark,
        light: buttonFlat.boxShadowPrimaryHover,
      },
    },
  
    divider: {
      color: normalize(buttonDivider.colorPrimary),
    },
  },

  secondary: {
    background: {
      color: {
        dark: buttonFlat.backgroundColorSecondaryDark,
        light: buttonFlat.backgroundColorSecondary,
      },
    },
    color: {
      dark: buttonFlat.colorSecondaryDark,
      light: buttonFlat.colorSecondary,
    },
  
    active: {
      background: {
        color: {
          dark: buttonFlat.backgroundColorSecondaryActiveDark,
          light: buttonFlat.backgroundColorSecondaryActive,
        },
      },
      color: {
        dark: buttonFlat.colorSecondaryActiveDark,
        light: buttonFlat.colorSecondaryActive,
      },
      boxShadow: {
        dark: buttonFlat.boxShadowSecondaryActiveDark,
        light: buttonFlat.boxShadowSecondaryActive,
      },
    },
  
    disabled: {
      background: {
        color: {
          dark: buttonFlat.backgroundColorSecondaryDisabledDark,
          light: buttonFlat.backgroundColorSecondaryDisabled,
        },
      },
      color: {
        dark: buttonFlat.colorSecondaryDisabledDark,
        light: buttonFlat.colorSecondaryDisabled,
      },
      boxShadow: {
        dark: buttonFlat.boxShadowSecondaryDisabledDark,
        light: buttonFlat.boxShadowSecondaryDisabled,
      },
    },
  
    focus: {
      background: {
        color: {
          dark: buttonFlat.backgroundColorSecondaryFocusDark,
          light: buttonFlat.backgroundColorSecondaryFocus,
        },
      },
      border: {
        color: {
          dark: buttonFlat.borderColorFocusDark,
          light: buttonFlat.borderColorFocus,
        },
      },
      boxShadow: {
        dark: buttonFlat.boxShadowFocusDark,
        light: buttonFlat.boxShadowFocus,
      },
      color: {
        dark: buttonFlat.colorSecondaryFocusDark,
        light: buttonFlat.colorSecondaryFocus,
      },
    },
  
    hover: {
      background: {
        color: {
          dark: buttonFlat.backgroundColorSecondaryHoverDark,
          light: buttonFlat.backgroundColorSecondaryHover,
        },
      },
      color: {
        dark: buttonFlat.colorSecondaryHoverDark,
        light: buttonFlat.colorSecondaryHover,
      },
      boxShadow: {
        dark: buttonFlat.boxShadowSecondaryHoverDark,
        light: buttonFlat.boxShadowSecondaryHover,
      },
    },
  
    divider: {
      color: normalize(buttonDivider.colorSecondary),
  
      disabled: {
        color: normalize(buttonDivider.colorSecondaryDisabled),
      },
    },
  }
};

export default theme;