import buttonIcon from '../../../quantum-ux/button-icon';

export const iconButton = {
  backgroundColor: {
    dark: buttonIcon.backgroundColorDark,
    light: buttonIcon.backgroundColor,
  },
  border: buttonIcon.border,
  fontSize: buttonIcon.fontSize,
  fontWeight: buttonIcon.fontWeight,
  height: buttonIcon.height,
  margin: buttonIcon.margin,
  minWidth: buttonIcon.minWidth,
  padding: buttonIcon.padding,

  active: {
    backgroundColor: {
      dark: buttonIcon.backgroundColorActiveDark,
      light: buttonIcon.backgroundColorActive,
    },
    borderColor: {
      dark: buttonIcon.borderColorActiveDark,
      light: buttonIcon.borderColorActive,
    },
    boxShadow: {
      dark: buttonIcon.boxShadowActiveDark,
      light: buttonIcon.boxShadowActive,
    },
    color: {
      dark: buttonIcon.colorActiveDark,
      light: buttonIcon.colorActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: buttonIcon.backgroundColorDisabledDark,
      light: buttonIcon.backgroundColorDisabled,
    },
    color: {
      dark: buttonIcon.colorDisabledDark,
      light: buttonIcon.colorDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: buttonIcon.backgroundColorFocusDark,
      light: buttonIcon.backgroundColorFocus,
    },
    borderColor: {
      dark: buttonIcon.borderColorFocusDark,
      light: buttonIcon.borderColorFocus,
    },
    boxShadow: {
      dark: buttonIcon.boxShadowFocusDark,
      light: buttonIcon.boxShadowFocus,
    },
    color: {
      dark: buttonIcon.colorFocusDark,
      light: buttonIcon.colorFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: buttonIcon.backgroundColorHoverDark,
      light: buttonIcon.backgroundColorHover,
    },
    borderColor: {
      dark: buttonIcon.borderColorHoverDark,
      light: buttonIcon.borderColorHover,
    },
    boxShadow: {
      dark: buttonIcon.boxShadowHoverDark,
      light: buttonIcon.boxShadowHover,
    },
    color: {
      dark: buttonIcon.colorHoverDark,
      light: buttonIcon.colorHover,
    },
  },
};

export type IconButton = typeof iconButton;

export default iconButton;
