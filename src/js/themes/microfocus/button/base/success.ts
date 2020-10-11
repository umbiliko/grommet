import { deepMerge } from '../../../../utils';
import _button from '../../../quantum-ux/button';
import buttonDivider from '../../../quantum-ux/button-divider';
import { normalize } from '../../../utils/pick';
import button from './button';

const defaultStyle = button.default;

const successStyle = deepMerge({}, button, defaultStyle, {
  backgroundColor: {
    dark: _button.backgroundColorSuccessDark,
    light: _button.backgroundColorSuccess,
  },
  color: {
    dark: _button.colorSuccessDark,
    light: _button.colorSuccess,
  },
  borderColor: {
    dark: _button.borderColorSuccessDark,
    light: _button.borderColorSuccess,
  },

  active: {
    backgroundColor: {
      dark: _button.backgroundColorSuccessActiveDark,
      light: _button.backgroundColorSuccessActive,
    },
    color: {
      dark: _button.colorSuccessActiveDark,
      light: _button.colorSuccessActive,
    },
    borderColor: {
      dark: _button.borderColorSuccessActiveDark,
      light: _button.borderColorSuccessActive,
    },
    boxShadow: {
      dark: _button.boxShadowSuccessActiveDark,
      light: _button.boxShadowSuccessActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: _button.backgroundColorSuccessDisabledDark,
      light: _button.backgroundColorSuccessDisabled,
    },
    color: {
      dark: _button.colorSuccessDisabledDark,
      light: _button.colorSuccessDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: _button.backgroundColorSuccessFocusDark,
      light: _button.backgroundColorSuccessFocus,
    },
    color: {
      dark: _button.colorSuccessFocusDark,
      light: _button.colorSuccessFocus,
    },
    borderColor: {
      dark: _button.borderColorSuccessFocusDark,
      light: _button.borderColorSuccessFocus,
    },
    boxShadow: {
      dark: _button.boxShadowFocus,
      light: _button.boxShadowFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: _button.backgroundColorSuccessHoverDark,
      light: _button.backgroundColorSuccessHover,
    },
    color: {
      dark: _button.colorSuccessHoverDark,
      light: _button.colorSuccessHover,
    },
    borderColor: {
      dark: _button.borderColorSuccessHoverDark,
      light: _button.borderColorSuccessHover,
    },
    boxShadow: {
      dark: _button.boxShadowSuccessHoverDark,
      light: _button.boxShadowSuccessHover,
    },
  },

  divider: {
    color: normalize(buttonDivider.colorSuccess),
  },
});

export default successStyle;
