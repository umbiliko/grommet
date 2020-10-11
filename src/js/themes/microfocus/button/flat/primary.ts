import buttonDivider from '../../../quantum-ux/button-divider';
import buttonFlat from '../../../quantum-ux/button-flat';
import { normalize } from '../../../utils/pick';
import defaultStyle, { FlatButtonStyle } from './default';

const primaryStyle: FlatButtonStyle = {
  ...defaultStyle,
  backgroundColor: {
    dark: buttonFlat.backgroundColorPrimaryDark,
    light: buttonFlat.backgroundColorPrimary,
  },
  color: {
    dark: buttonFlat.colorPrimaryDark,
    light: buttonFlat.colorPrimary,
  },

  active: {
    backgroundColor: {
      dark: buttonFlat.backgroundColorPrimaryActiveDark,
      light: buttonFlat.backgroundColorPrimaryActive,
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
    backgroundColor: {
      dark: buttonFlat.backgroundColorPrimaryDisabledDark,
      light: buttonFlat.backgroundColorPrimaryDisabled,
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
    backgroundColor: {
      dark: buttonFlat.backgroundColorPrimaryFocusDark,
      light: buttonFlat.backgroundColorPrimaryFocus,
    },
    borderColor: {
      dark: buttonFlat.borderColorFocusDark,
      light: buttonFlat.borderColorFocus,
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
    backgroundColor: {
      dark: buttonFlat.backgroundColorPrimaryHoverDark,
      light: buttonFlat.backgroundColorPrimaryHover,
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
};

export default primaryStyle;
