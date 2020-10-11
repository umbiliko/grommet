import { deepMerge } from 'hercules-theme/utils';
import _button from '../../../quantum-ux/button';
import buttonDivider from '../../../quantum-ux/button-divider';
import { normalize } from '../../../utils/pick';
import button from './button';

const defaultStyle = button.default;

const criticalStyle = deepMerge({}, defaultStyle, {
  backgroundColor: {
    dark: _button.backgroundColorWarningDark,
    light: _button.backgroundColorWarning,
  },
  color: {
    dark: _button.colorWarningDark,
    light: _button.colorWarning,
  },
  borderColor: {
    dark: _button.borderColorWarningDark,
    light: _button.borderColorWarning,
  },

  active: {
    backgroundColor: {
      dark: _button.backgroundColorWarningActiveDark,
      light: _button.backgroundColorWarningActive,
    },
    color: {
      dark: _button.colorWarningActiveDark,
      light: _button.colorWarningActive,
    },
    borderColor: {
      dark: _button.borderColorWarningActiveDark,
      light: _button.borderColorWarningActive,
    },
    boxShadow: {
      dark: _button.boxShadowWarningActiveDark,
      light: _button.boxShadowWarningActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: _button.backgroundColorWarningDisabledDark,
      light: _button.backgroundColorWarningDisabled,
    },
    color: {
      dark: _button.colorWarningDisabledDark,
      light: _button.colorWarningDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: _button.backgroundColorWarningFocusDark,
      light: _button.backgroundColorWarningFocus,
    },
    color: {
      dark: _button.colorWarningFocusDark,
      light: _button.colorWarningFocus,
    },
    borderColor: {
      dark: _button.backgroundColorWarningFocusDark,
      light: _button.backgroundColorWarningFocus,
    },
    boxShadow: {
      dark: _button.boxShadowFocus,
      light: _button.boxShadowFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: _button.backgroundColorWarningDark,
      light: _button.backgroundColorWarning,
    },
    color: {
      dark: _button.colorWarningDark,
      light: _button.colorWarning,
    },
    borderColor: {
      dark: _button.backgroundColorWarningHoverDark,
      light: _button.backgroundColorWarningHover,
    },
    boxShadow: {
      dark: _button.boxShadowWarningHoverDark,
      light: _button.boxShadowWarningHover,
    },
  },

  divider: {
    color: normalize(buttonDivider.colorWarning),
  },
});

export default criticalStyle;
