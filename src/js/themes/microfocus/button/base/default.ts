import buttonSpec from '../../../quantum-ux/button';
import button from './button';

export const defaultStyle = {
  ...button,
  backgroundColor: {
    dark: buttonSpec.backgroundColorDefaultDark,
    light: buttonSpec.backgroundColorDefault,
  },
  borderColor: {
    dark: buttonSpec.borderColorDefaultDark,
    light: buttonSpec.borderColorDefault,
  },
  color: {
    dark: buttonSpec.colorDefaultDark,
    light: buttonSpec.colorDefault,
  },

  active: {
    backgroundColor: {
      dark: buttonSpec.backgroundColorDefaultActiveDark,
      light: buttonSpec.backgroundColorDefaultActive,
    },
    borderColor: {
      dark: buttonSpec.borderColorDefaultActiveDark,
      light: buttonSpec.borderColorDefaultActive,
    },
    color: {
      dark: buttonSpec.colorDefaultActiveDark,
      light: buttonSpec.colorDefaultActive,
    },
    boxShadow: {
      dark: buttonSpec.boxShadowDefaultActiveDark,
      light: buttonSpec.boxShadowDefaultActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: buttonSpec.backgroundColorDefaultDisabledDark,
      light: buttonSpec.backgroundColorDefaultDisabled,
    },
    boxShadow: {
      dark: 'none',
      light: 'none',
    },
    color: {
      dark: buttonSpec.colorDefaultDisabledDark,
      light: buttonSpec.colorDefaultDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: buttonSpec.backgroundColorDefaultFocusDark,
      light: buttonSpec.backgroundColorDefaultFocus,
    },
    borderColor: {
      dark: buttonSpec.borderColorDefaultFocusDark,
      light: buttonSpec.borderColorDefaultFocus,
    },
    boxShadow: {
      dark: buttonSpec.boxShadowFocus,
      light: buttonSpec.boxShadowFocus,
    },
    color: {
      dark: buttonSpec.colorDefaultFocusDark,
      light: buttonSpec.colorDefaultFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: buttonSpec.backgroundColorDefaultHoverDark,
      light: buttonSpec.backgroundColorDefaultHover,
    },
    borderColor: {
      dark: buttonSpec.borderColorDefaultHoverDark,
      light: buttonSpec.borderColorDefaultHover,
    },
    boxShadow: {
      dark: buttonSpec.boxShadowDefaultHoverDark,
      light: buttonSpec.boxShadowDefaultHover,
    },
    color: {
      dark: buttonSpec.colorDefaultHoverDark,
      light: buttonSpec.colorDefaultHover,
    },
  },
};

export type BaseButtonStyle = typeof defaultStyle;

export default defaultStyle;
