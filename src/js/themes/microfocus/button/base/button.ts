import _button from '../../../quantum-ux/button';
import buttonCaret from '../../../quantum-ux/button-caret';
// import { undefinedColor } from '../../colors';
import buttonDivider from '../../../quantum-ux/button-divider';
import { normalize } from '../../../utils/pick';

export const button = {
  border: {
    color: {
      dark: _button.borderColorDefaultDark,
      light: _button.borderColorDefault
    },
    radius: _button.borderRadius,
    width: _button.borderWidth,
  },
  boxShadow: {
    dark: _button.boxShadow,
    light: _button.boxShadow,
  },
  caret: buttonCaret,
  color: {
    dark: _button.colorDefaultDark,
    light: _button.colorDefault,
  },
  fontSize: _button.fontSize,
  fontWeight: _button.fontWeight,
  height: _button.height,
  iconLabelGap: _button.iconLabelGap,
  iconLabelVerticalAlign: _button.iconLabelVerticalAlign,
  letterSpacing: _button.letterSpacing,
  // letterSpacing: spec.global.text.captionLetterSpacing,
  lineHeight: _button.lineHeight,
  margin: _button.margin,
  marginBottom: _button.marginBottom,
  marginLeft: _button.marginLeft,
  marginRight: _button.marginRight,
  marginTop: _button.marginTop,
  maxWidth: _button.maxWidth,
  minWidth: _button.minWidth,
  // padding: spec.padding,
  padding: {
    horizontal: _button.paddingLeft,
    vertical: _button.paddingBottom,
  },
  paddingBottom: _button.paddingBottom,
  paddingLeft: _button.paddingLeft,
  paddingRight: _button.paddingRight,
  paddingTop: _button.paddingTop,
  textShadow: _button.textShadow,
  textTransform: _button.textTransform,
  // transition: _button.transition,

  active: {
    boxShadow: {
      dark: _button.boxShadowActive,
      light: _button.boxShadowActive,
    },
  },

  disabled: {
    boxShadow: {
      dark: _button.backgroundColorDefaultDisabledDark,
      light: _button.backgroundColorDefaultDisabled,
      // dark: undefinedColor, // spec.boxShadowDisabledDark,
      // light: undefinedColor, // spec.boxShadowDisabled,
    },
  },

  hover: {
    boxShadow: {
      dark: _button.boxShadowHoverDark,
      light: _button.boxShadowHover,
    },
  },

  focus: {
    boxShadow: {
      dark: _button.boxShadowFocus,
      light: _button.boxShadowFocus,
    },
  },

  default: {
    background: {
      color: {
        dark: _button.backgroundColorDefaultDark,
        light: _button.backgroundColorDefault,
      },
    },
    border: {
      color: {
        dark: _button.borderColorDefaultDark,
        light: _button.borderColorDefault,
      },
    },
    color: {
      dark: _button.colorDefaultDark,
      light: _button.colorDefault,
    },
  
    active: {
      background: {
        color: {
          dark: _button.backgroundColorDefaultActiveDark,
          light: _button.backgroundColorDefaultActive,
        },
      },
      border: {
        color: {
          dark: _button.borderColorDefaultActiveDark,
          light: _button.borderColorDefaultActive,
        },
      },
      color: {
        dark: _button.colorDefaultActiveDark,
        light: _button.colorDefaultActive,
      },
      boxShadow: {
        dark: _button.boxShadowDefaultActiveDark,
        light: _button.boxShadowDefaultActive,
      },
    },
  
    disabled: {
      background: {
        color: {
          dark: _button.backgroundColorDefaultDisabledDark,
          light: _button.backgroundColorDefaultDisabled,
        },
      },
      boxShadow: {
        dark: 'none',
        light: 'none',
      },
      color: {
        dark: _button.colorDefaultDisabledDark,
        light: _button.colorDefaultDisabled,
      },
    },
  
    focus: {
      background: {
        color: {
          dark: _button.backgroundColorDefaultFocusDark,
          light: _button.backgroundColorDefaultFocus,
        },
      },
      border: {
        color: {
          dark: _button.borderColorDefaultFocusDark,
          light: _button.borderColorDefaultFocus,
        }
      },
      boxShadow: {
        dark: _button.boxShadowFocus,
        light: _button.boxShadowFocus,
      },
      color: {
        dark: _button.colorDefaultFocusDark,
        light: _button.colorDefaultFocus,
      },
    },
  
    hover: {
      background: {
        color: {
          dark: _button.backgroundColorDefaultHoverDark,
          light: _button.backgroundColorDefaultHover,
        },
      },
      border: {
        color: {
          dark: _button.borderColorDefaultHoverDark,
          light: _button.borderColorDefaultHover,
        },
      },
      boxShadow: {
        dark: _button.boxShadowDefaultHoverDark,
        light: _button.boxShadowDefaultHover,
      },
      color: {
        dark: _button.colorDefaultHoverDark,
        light: _button.colorDefaultHover,
      },
    },
  },

  primary: {
    background: {
      color: {
        dark: _button.backgroundColorPrimaryDark,
        light: _button.backgroundColorPrimary,
      },
    },
    color: {
      dark: _button.colorPrimaryDark,
      light: _button.colorPrimary,
    },
    border: {
      color: {
        dark: _button.borderColorPrimaryDark,
        light: _button.borderColorPrimary,
      },
    },
    borderRadius: '0px', // spec.borderRadius,
    active: {
      background: {
        color: {
          dark: _button.backgroundColorPrimaryActiveDark,
          light: _button.backgroundColorPrimaryActive,
        },
      },
      color: {
        dark: _button.colorPrimaryActiveDark,
        light: _button.colorPrimaryActive,
      },
      border: {
        color: {
          dark: _button.borderColorPrimaryActiveDark,
          light: _button.borderColorPrimaryActive,
        },
      },
      boxShadow: {
        dark: _button.boxShadowPrimaryActiveDark,
        light: _button.boxShadowPrimaryActive,
      },
    },
  
    disabled: {
      background: {
        color: {
          dark: _button.backgroundColorPrimaryDisabledDark,
          light: _button.backgroundColorPrimaryDisabled,
        },
      },
      color: {
        dark: _button.colorPrimaryDisabledDark,
        light: _button.colorPrimaryDisabled,
      },
    },
  
    focus: {
      background: {
        color: {
          dark: _button.backgroundColorPrimaryFocusDark,
          light: _button.backgroundColorPrimaryFocus,
        },
      },
      color: {
        dark: _button.colorPrimaryFocusDark,
        light: _button.colorPrimaryFocus,
      },
      border: {
        color: {
          dark: _button.borderColorPrimaryFocusDark,
          light: _button.borderColorPrimaryFocus,
        },
      },
      boxShadow: {
        dark: _button.boxShadowFocus,
        light: _button.boxShadowFocus,
      },
    },
  
    hover: {
      background: {
        color: {
          dark: _button.backgroundColorPrimaryHoverDark,
          light: _button.backgroundColorPrimaryHover,
        },
      },
      color: {
        dark: _button.colorPrimaryHoverDark,
        light: _button.colorPrimaryHover,
      },
      border: {
        color: {
          dark: _button.borderColorPrimaryHoverDark,
          light: _button.borderColorPrimaryHover,
        },
      },
      boxShadow: {
        dark: _button.boxShadowPrimaryHoverDark,
        light: _button.boxShadowPrimaryHover,
      },
    }
  },
  secondary: {
    background: {
      color: {
        dark: _button.backgroundColorSecondaryDark,
        light: _button.backgroundColorSecondary,
      },
    },
    color: {
      dark: '#ffffff',
      light: _button.colorSecondary,
    },
    border: {
      color: {
        dark: _button.borderColorSecondaryDark,
        light: _button.borderColorSecondary,
      },
    },
    active: {
      background: {
        color: {
          dark: _button.backgroundColorSecondaryActiveDark,
          light: _button.backgroundColorSecondaryActive,
        },
      },
      color: {
        dark: '#ffffff',
        light: _button.colorSecondaryActive,
      },
      border: {
        color: {
          dark: _button.borderColorSecondaryActiveDark,
          light: _button.borderColorSecondaryActive,
        },
      },
      boxShadow: {
        dark: _button.boxShadowSecondaryActiveDark,
        light: _button.boxShadowSecondaryActive,
      },
    },
  
    disabled: {
      background: {
        color: {
          dark: _button.backgroundColorSecondaryDisabledDark,
          light: _button.backgroundColorSecondaryDisabled,
        },
      },
      color: {
        dark: _button.colorSecondaryDisabledDark,
        light: _button.colorSecondaryDisabled,
      },
    },
  
    focus: {
      background: {
        color: {
          dark: '#ffffff',
          light: _button.backgroundColorSecondaryFocus,
        },
      },
      color: {
        dark: _button.colorSecondaryFocusDark,
        light: _button.colorSecondaryFocus,
      },
      border: {
        color: {
          dark: _button.borderColorSecondaryFocusDark,
          light: _button.borderColorSecondaryFocus,
        },
      },
      boxShadow: {
        dark: _button.boxShadowFocus,
        light: _button.boxShadowFocus,
      },
    },
  
    hover: {
      background: {
        color: {
          dark: '#ffffff',
          light: _button.backgroundColorSecondaryHover,
        },
      },
      color: {
        dark: _button.colorSecondaryHoverDark,
        light: _button.colorSecondaryHover,
      },
      border: {
        color: {
          dark: _button.borderColorSecondaryHoverDark,
          light: _button.borderColorSecondaryHover,
        },
      },
      boxShadow: {
        dark: _button.boxShadowSecondaryHoverDark,
        light: _button.boxShadowSecondaryHover,
      },
    },
  
    divider: {
      color: normalize(buttonDivider.colorSecondary),
  
      disabled: {
        color: normalize(buttonDivider.colorSecondaryDisabled),
      },
    },
  },

  size: {
    large: {
      height: _button.heightLarge,
      pad: {
        horizontal: _button.paddingLarge,
        vertical: _button.paddingLarge
      }
    },
    medium: {
      height: _button.height,
      pad: {
        horizontal: _button.padding,
        vertical: _button.padding,
      }
    },
    small: {
      height: _button.heightSmall,
      pad: {
        horizontal: _button.paddingSmall,
        vertical: _button.paddingSmall,
      }
    }
  },
  accent: {
    background: {
      color: {
        dark: _button.backgroundColorAccentDark,
        light: _button.backgroundColorAccent,
      },
    },
    color: {
      dark: '#ffffff',
      light: _button.colorAccent,
    },
    border: {
      color: {
        dark: _button.borderColorAccentDark,
        light: _button.borderColorAccent,
      },
    },
  
    active: {
      background: {
        color: {
          dark: _button.backgroundColorAccentActiveDark,
          light: _button.backgroundColorAccentActive,
        },
      },
      color: {
        dark: _button.colorAccentActiveDark,
        light: _button.colorAccentActive,
      },
      border: {
        color: {
          dark: _button.borderColorAccentActiveDark,
          light: _button.borderColorAccentActive,
        },
      },
      boxShadow: {
        dark: _button.boxShadowAccentActiveDark,
        light: _button.boxShadowAccentActive,
      },
    },
  
    disabled: {
      background: {
        color: {
          dark: _button.backgroundColorAccentDisabledDark,
          light: _button.backgroundColorAccentDisabled,
        },
      },
      color: {
        dark: _button.colorAccentDisabledDark,
        light: _button.colorAccentDisabled,
      },
    },
  
    focus: {
      background: {
        color: {
          dark: _button.backgroundColorAccentFocusDark,
          light: _button.backgroundColorAccentFocus,
        },
      },
      color: {
        dark: _button.colorAccentFocusDark,
        light: _button.colorAccentFocus,
      },
      border: {
        color: {
          dark: _button.backgroundColorAccentFocusDark,
          light: _button.backgroundColorAccentFocus,
        },
      },
      boxShadow: {
        dark: _button.boxShadowFocus,
        light: _button.boxShadowFocus,
      },
    },
  
    hover: {
      background: {
        color: {
          dark: _button.backgroundColorAccentDark,
          light: _button.backgroundColorAccent,
        },
      },
      color: {
        dark: _button.colorAccentDark,
        light: _button.colorAccent,
      },
      border: {
        color: {
          dark: _button.backgroundColorAccentHoverDark,
          light: _button.backgroundColorAccentHover,
        },
      },
      boxShadow: {
        dark: _button.boxShadowAccentHoverDark,
        light: _button.boxShadowAccentHover,
      },
    },
  
    divider: {
      color: normalize(buttonDivider.colorAccent),
  
      disabled: {
        color: normalize(buttonDivider.colorAccentDisabled),
      },
    }
  }
};

export default button;
