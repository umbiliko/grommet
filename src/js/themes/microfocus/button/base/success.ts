import { deepMerge } from '../../../../utils';
import button from '../../../quantum-ux/button';
import buttonDivider from '../../../quantum-ux/button-divider';
import { normalize } from '../../../utils/pick';
import defaultStyle from './default';

const successStyle = deepMerge({}, defaultStyle, {
  backgroundColor: {
    dark: button.backgroundColorSuccessDark,
    light: button.backgroundColorSuccess,
  },
  color: {
    dark: button.colorSuccessDark,
    light: button.colorSuccess,
  },
  borderColor: {
    dark: button.borderColorSuccessDark,
    light: button.borderColorSuccess,
  },

  active: {
    backgroundColor: {
      dark: button.backgroundColorSuccessActiveDark,
      light: button.backgroundColorSuccessActive,
    },
    color: {
      dark: button.colorSuccessActiveDark,
      light: button.colorSuccessActive,
    },
    borderColor: {
      dark: button.borderColorSuccessActiveDark,
      light: button.borderColorSuccessActive,
    },
    boxShadow: {
      dark: button.boxShadowSuccessActiveDark,
      light: button.boxShadowSuccessActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: button.backgroundColorSuccessDisabledDark,
      light: button.backgroundColorSuccessDisabled,
    },
    color: {
      dark: button.colorSuccessDisabledDark,
      light: button.colorSuccessDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: button.backgroundColorSuccessFocusDark,
      light: button.backgroundColorSuccessFocus,
    },
    color: {
      dark: button.colorSuccessFocusDark,
      light: button.colorSuccessFocus,
    },
    borderColor: {
      dark: button.borderColorSuccessFocusDark,
      light: button.borderColorSuccessFocus,
    },
    boxShadow: {
      dark: button.boxShadowFocus,
      light: button.boxShadowFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: button.backgroundColorSuccessHoverDark,
      light: button.backgroundColorSuccessHover,
    },
    color: {
      dark: button.colorSuccessHoverDark,
      light: button.colorSuccessHover,
    },
    borderColor: {
      dark: button.borderColorSuccessHoverDark,
      light: button.borderColorSuccessHover,
    },
    boxShadow: {
      dark: button.boxShadowSuccessHoverDark,
      light: button.boxShadowSuccessHover,
    },
  },

  divider: {
    color: normalize(buttonDivider.colorSuccess),
  },
});

export default successStyle;
