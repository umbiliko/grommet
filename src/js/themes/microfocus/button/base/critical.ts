import { deepMerge } from 'grommet-icons/utils';
import button from '../../../quantum-ux/button';
import buttonDivider from '../../../quantum-ux/button-divider';
import { normalize } from '../../../utils/pick';
import defaultStyle from './default';

const criticalStyle = deepMerge({}, defaultStyle, {
  backgroundColor: {
    dark: button.backgroundColorWarningDark,
    light: button.backgroundColorWarning,
  },
  color: {
    dark: button.colorWarningDark,
    light: button.colorWarning,
  },
  borderColor: {
    dark: button.borderColorWarningDark,
    light: button.borderColorWarning,
  },

  active: {
    backgroundColor: {
      dark: button.backgroundColorWarningActiveDark,
      light: button.backgroundColorWarningActive,
    },
    color: {
      dark: button.colorWarningActiveDark,
      light: button.colorWarningActive,
    },
    borderColor: {
      dark: button.borderColorWarningActiveDark,
      light: button.borderColorWarningActive,
    },
    boxShadow: {
      dark: button.boxShadowWarningActiveDark,
      light: button.boxShadowWarningActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: button.backgroundColorWarningDisabledDark,
      light: button.backgroundColorWarningDisabled,
    },
    color: {
      dark: button.colorWarningDisabledDark,
      light: button.colorWarningDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: button.backgroundColorWarningFocusDark,
      light: button.backgroundColorWarningFocus,
    },
    color: {
      dark: button.colorWarningFocusDark,
      light: button.colorWarningFocus,
    },
    borderColor: {
      dark: button.backgroundColorWarningFocusDark,
      light: button.backgroundColorWarningFocus,
    },
    boxShadow: {
      dark: button.boxShadowFocus,
      light: button.boxShadowFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: button.backgroundColorWarningDark,
      light: button.backgroundColorWarning,
    },
    color: {
      dark: button.colorWarningDark,
      light: button.colorWarning,
    },
    borderColor: {
      dark: button.backgroundColorWarningHoverDark,
      light: button.backgroundColorWarningHover,
    },
    boxShadow: {
      dark: button.boxShadowWarningHoverDark,
      light: button.boxShadowWarningHover,
    },
  },

  divider: {
    color: normalize(buttonDivider.colorWarning),
  },
});

export default criticalStyle;
