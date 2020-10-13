import buttonIcon from '../../quantum-ux/button-icon';

export const icon = {
  background: {
    color: {
      dark: buttonIcon.backgroundColorDark,
      light: buttonIcon.backgroundColor,
    },
  },
  border: buttonIcon.border,
  color: {
    dark: buttonIcon.colorDark,
    light: buttonIcon.color,
  },

  active: {
    borderColor: {
      dark: buttonIcon.borderColorActiveDark,
      light: buttonIcon.borderColorActive,
    },
    boxShadow: {
      dark: buttonIcon.boxShadowActiveDark,
      light: buttonIcon.boxShadowActive,
    },
  },
  focus: {
    borderColor: {
      dark: buttonIcon.borderColorFocusDark,
      light: buttonIcon.borderColorFocus,
    },
    boxShadow: {
      dark: buttonIcon.boxShadowFocusDark,
      light: buttonIcon.boxShadowFocus,
    },
  },
  hover: {
    borderColor: {
      dark: buttonIcon.borderColorHoverDark,
      light: buttonIcon.borderColorHover,
    },
    boxShadow: {
      dark: buttonIcon.boxShadowHoverDark,
      light: buttonIcon.boxShadowHover,
    },
  },
};
