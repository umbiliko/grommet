import button from '../../../quantum-ux/button';
import buttonDivider from '../../../quantum-ux/button-divider';
import buttonFlat from '../../../quantum-ux/button-flat';
import { normalize } from '../../../utils/pick';
import defaultStyle, { FlatButtonStyle } from './default';

export const successStyle: FlatButtonStyle = {
  ...defaultStyle,
  backgroundColor: {
    dark: button.backgroundColorSuccessDark,
    light: button.backgroundColorSuccess,
  },
  borderColor: {
    dark: button.borderColorSuccessDark,
    light: button.borderColorSuccess,
  },
  color: {
    dark: button.colorSuccessDark,
    light: button.colorSuccess,
  },

  active: {
    backgroundColor: {
      dark: button.backgroundColorSuccessActiveDark,
      light: button.backgroundColorSuccessActive,
    },
    borderColor: {
      dark: button.borderColorSuccessActiveDark,
      light: button.borderColorSuccessActive,
    },
    boxShadow: {
      dark: button.boxShadowSuccessActiveDark,
      light: button.boxShadowSuccessActive,
    },
    color: {
      dark: button.colorSuccessActiveDark,
      light: button.colorSuccessActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: buttonFlat.backgroundColorSuccessDisabledDark,
      light: buttonFlat.backgroundColorSuccessDisabled,
    },
    boxShadow: {
      dark: buttonFlat.boxShadowSuccessDisabledDark,
      light: buttonFlat.boxShadowSuccessDisabled,
    },
    color: {
      dark: buttonFlat.colorSuccessDisabledDark,
      light: buttonFlat.colorSuccessDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: button.backgroundColorSuccessFocusDark,
      light: button.backgroundColorSuccessFocus,
    },
    borderColor: {
      dark: button.borderColorSuccessFocusDark,
      light: button.borderColorSuccessFocus,
    },
    boxShadow: {
      dark: buttonFlat.boxShadowFocusDark,
      light: buttonFlat.boxShadowFocus,
    },
    color: {
      dark: button.colorSuccessFocusDark,
      light: button.colorSuccessFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: button.backgroundColorSuccessHoverDark,
      light: button.backgroundColorSuccessHover,
    },
    borderColor: {
      dark: button.borderColorSuccessHoverDark,
      light: button.borderColorSuccessHover,
    },
    boxShadow: {
      dark: button.boxShadowSuccessHoverDark,
      light: button.boxShadowSuccessHover,
    },
    color: {
      dark: button.colorSuccessHoverDark,
      light: button.colorSuccessHover,
    },
  },

  divider: {
    color: normalize(buttonDivider.colorSuccess),
  },
};

export default successStyle;
