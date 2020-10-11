import { deepMerge } from 'grommet-icons/utils';
import button from '../../../quantum-ux/button';
import defaultStyle from './default';

const primaryStyle = deepMerge({}, defaultStyle, {
  backgroundColor: {
    dark: button.backgroundColorPrimaryDark,
    light: button.backgroundColorPrimary,
  },
  color: {
    dark: button.colorPrimaryDark,
    light: button.colorPrimary,
  },
  borderColor: {
    dark: button.borderColorPrimaryDark,
    light: button.borderColorPrimary,
  },

  active: {
    backgroundColor: {
      dark: button.backgroundColorPrimaryActiveDark,
      light: button.backgroundColorPrimaryActive,
    },
    color: {
      dark: button.colorPrimaryActiveDark,
      light: button.colorPrimaryActive,
    },
    borderColor: {
      dark: button.borderColorPrimaryActiveDark,
      light: button.borderColorPrimaryActive,
    },
    boxShadow: {
      dark: button.boxShadowPrimaryActiveDark,
      light: button.boxShadowPrimaryActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: button.backgroundColorPrimaryDisabledDark,
      light: button.backgroundColorPrimaryDisabled,
    },
    color: {
      dark: button.colorPrimaryDisabledDark,
      light: button.colorPrimaryDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: button.backgroundColorPrimaryFocusDark,
      light: button.backgroundColorPrimaryFocus,
    },
    color: {
      dark: button.colorPrimaryFocusDark,
      light: button.colorPrimaryFocus,
    },
    borderColor: {
      dark: button.borderColorPrimaryFocusDark,
      light: button.borderColorPrimaryFocus,
    },
    boxShadow: {
      dark: button.boxShadowFocus,
      light: button.boxShadowFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: button.backgroundColorPrimaryHoverDark,
      light: button.backgroundColorPrimaryHover,
    },
    color: {
      dark: button.colorPrimaryHoverDark,
      light: button.colorPrimaryHover,
    },
    borderColor: {
      dark: button.borderColorPrimaryHoverDark,
      light: button.borderColorPrimaryHover,
    },
    boxShadow: {
      dark: button.boxShadowPrimaryHoverDark,
      light: button.boxShadowPrimaryHover,
    },
  },
});

export default primaryStyle;
