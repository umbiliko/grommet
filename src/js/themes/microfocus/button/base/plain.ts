import { deepMerge } from 'hercules-theme/utils';
import button from '../../../quantum-ux/button';
import buttonStyle from './button';

export const plainStyle = deepMerge({}, buttonStyle, {
  backgroundColor: {
    dark: button.backgroundColorDefaultDark,
    light: button.backgroundColorDefault,
  },
  borderColor: {
    dark: button.borderColorDefaultDark,
    light: button.borderColorDefault,
  },
  color: {
    dark: button.colorDefaultDark,
    light: button.colorDefault,
  },

  active: {
    backgroundColor: {
      dark: button.backgroundColorDefaultActiveDark,
      light: button.backgroundColorDefaultActive,
    },
    borderColor: {
      dark: button.borderColorDefaultActiveDark,
      light: button.borderColorDefaultActive,
    },
    color: {
      dark: button.colorDefaultActiveDark,
      light: button.colorDefaultActive,
    },
    boxShadow: {
      dark: button.boxShadowDefaultActiveDark,
      light: button.boxShadowDefaultActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: button.backgroundColorDefaultDisabledDark,
      light: button.backgroundColorDefaultDisabled,
    },
    boxShadow: {
      dark: 'none',
      light: 'none',
    },
    color: {
      dark: button.colorDefaultDisabledDark,
      light: button.colorDefaultDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: button.backgroundColorDefaultFocusDark,
      light: button.backgroundColorDefaultFocus,
    },
    borderColor: {
      dark: button.borderColorDefaultFocusDark,
      light: button.borderColorDefaultFocus,
    },
    boxShadow: {
      dark: button.boxShadowFocus,
      light: button.boxShadowFocus,
    },
    color: {
      dark: button.colorDefaultFocusDark,
      light: button.colorDefaultFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: button.backgroundColorDefaultHoverDark,
      light: button.backgroundColorDefaultHover,
    },
    borderColor: {
      dark: button.borderColorDefaultHoverDark,
      light: button.borderColorDefaultHover,
    },
    boxShadow: {
      dark: button.boxShadowDefaultHoverDark,
      light: button.boxShadowDefaultHover,
    },
    color: {
      dark: button.colorDefaultHoverDark,
      light: button.colorDefaultHover,
    },
  },
});

export type BaseButtonStyle = typeof plainStyle;

export default plainStyle;
