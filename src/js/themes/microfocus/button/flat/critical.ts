import buttonDivider from '../../../quantum-ux/button-divider';
import buttonFlat from '../../../quantum-ux/button-flat';
import { undefinedColor } from '../../colors';
import { normalize } from '../../../utils/pick';
import button, { FlatButtonStyle } from './index';
import { deepMerge } from 'hercules-theme/utils';

const criticalStyle: FlatButtonStyle = deepMerge({ } as any, button, {
  background: {
    color: {
      dark: buttonFlat.backgroundColorWarningDark,
      light: buttonFlat.backgroundColorWarning,
    },
  },
  color: {
    dark: buttonFlat.colorWarningDark,
    light: buttonFlat.colorWarning,
  },

  active: {
    background: {
      color: {
        dark: buttonFlat.backgroundColorWarningActiveDark,
        light: buttonFlat.backgroundColorWarningActive,
      },
    },
    color: {
      dark: buttonFlat.colorWarningActiveDark,
      light: buttonFlat.colorWarningActive,
    },
    boxShadow: {
      dark: buttonFlat.boxShadowWarningActiveDark,
      light: buttonFlat.boxShadowWarningActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: buttonFlat.backgroundColorWarningDisabledDark,
      light: buttonFlat.backgroundColorWarningDisabled,
    },
    boxShadow: {
      dark: buttonFlat.boxShadowWarningDisabledDark,
      light: buttonFlat.boxShadowWarningDisabled,
    },
    color: {
      dark: buttonFlat.colorWarningDisabledDark,
      light: buttonFlat.colorWarningDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: buttonFlat.backgroundColorWarningFocusDark,
      light: buttonFlat.backgroundColorWarningFocus,
    },
    color: {
      dark: buttonFlat.colorWarningFocusDark,
      light: buttonFlat.colorWarningFocus,
    },
    borderColor: {
      dark: buttonFlat.backgroundColorWarningFocusDark,
      light: buttonFlat.backgroundColorWarningFocus,
    },
    boxShadow: {
      dark: buttonFlat.boxShadowFocusDark,
      light: buttonFlat.boxShadowFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: buttonFlat.backgroundColorWarningDark,
      light: buttonFlat.backgroundColorWarning,
    },
    color: {
      dark: buttonFlat.colorWarningDark,
      light: buttonFlat.colorWarning,
    },
    borderColor: {
      dark: buttonFlat.backgroundColorWarningHoverDark,
      light: buttonFlat.backgroundColorWarningHover,
    },
    boxShadow: {
      dark: buttonFlat.boxShadowWarningHoverDark,
      light: buttonFlat.boxShadowWarningHover,
    },
  },

  divider: {
    color: normalize(buttonDivider.colorWarning),

    disabled: {
      color: undefinedColor,
    },
  },
});

export default criticalStyle;
