import { deepMerge } from 'hercules-theme/utils';
import _button from '../../../quantum-ux/button';
import buttonDivider from '../../../quantum-ux/button-divider';
import buttonFlat from '../../../quantum-ux/button-flat';
import { normalize } from '../../../utils/pick';
import button, { FlatButtonStyle } from './index';

export const successStyle: FlatButtonStyle = deepMerge({ } as any, button, {
  backgroundColor: {
    dark: _button.backgroundColorSuccessDark,
    light: _button.backgroundColorSuccess,
  },
  borderColor: {
    dark: _button.borderColorSuccessDark,
    light: _button.borderColorSuccess,
  },
  color: {
    dark: _button.colorSuccessDark,
    light: _button.colorSuccess,
  },

  active: {
    backgroundColor: {
      dark: _button.backgroundColorSuccessActiveDark,
      light: _button.backgroundColorSuccessActive,
    },
    borderColor: {
      dark: _button.borderColorSuccessActiveDark,
      light: _button.borderColorSuccessActive,
    },
    boxShadow: {
      dark: _button.boxShadowSuccessActiveDark,
      light: _button.boxShadowSuccessActive,
    },
    color: {
      dark: _button.colorSuccessActiveDark,
      light: _button.colorSuccessActive,
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
      dark: _button.backgroundColorSuccessFocusDark,
      light: _button.backgroundColorSuccessFocus,
    },
    borderColor: {
      dark: _button.borderColorSuccessFocusDark,
      light: _button.borderColorSuccessFocus,
    },
    boxShadow: {
      dark: buttonFlat.boxShadowFocusDark,
      light: buttonFlat.boxShadowFocus,
    },
    color: {
      dark: _button.colorSuccessFocusDark,
      light: _button.colorSuccessFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: _button.backgroundColorSuccessHoverDark,
      light: _button.backgroundColorSuccessHover,
    },
    borderColor: {
      dark: _button.borderColorSuccessHoverDark,
      light: _button.borderColorSuccessHover,
    },
    boxShadow: {
      dark: _button.boxShadowSuccessHoverDark,
      light: _button.boxShadowSuccessHover,
    },
    color: {
      dark: _button.colorSuccessHoverDark,
      light: _button.colorSuccessHover,
    },
  },

  divider: {
    color: normalize(buttonDivider.colorSuccess),
  },
});

export default successStyle;
