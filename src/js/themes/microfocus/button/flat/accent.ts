import buttonDivider from '../../../quantum-ux/button-divider';
import buttonFlat from '../../../quantum-ux/button-flat';
import { normalize } from '../../../utils/pick';
import defaultStyle, { FlatButtonStyle } from './index';

const accentStyle: FlatButtonStyle = {
  ...defaultStyle,
  background: {
    color: {
      dark: buttonFlat.backgroundColorAccentDark,
      light: buttonFlat.backgroundColorAccent,
    },
  },
  color: {
    dark: buttonFlat.colorAccentDark,
    light: buttonFlat.colorAccent,
  },

  active: {
    background: {
      color: {
        dark: buttonFlat.backgroundColorAccentActiveDark,
        light: buttonFlat.backgroundColorAccentActive,
      },
    },
    boxShadow: {
      dark: buttonFlat.boxShadowAccentActiveDark,
      light: buttonFlat.boxShadowAccentActive,
    },
    color: {
      dark: buttonFlat.colorAccentActiveDark,
      light: buttonFlat.colorAccentActive,
    },
  },

  disabled: {
    background: {
      color: {
        dark: buttonFlat.backgroundColorAccentDisabledDark,
        light: buttonFlat.backgroundColorAccentDisabled,
      },
    },
    boxShadow: {
      dark: buttonFlat.boxShadowAccentDisabledDark,
      light: buttonFlat.boxShadowAccentDisabled,
    },
    color: {
      dark: buttonFlat.colorAccentDisabledDark,
      light: buttonFlat.colorAccentDisabled,
    },
  },

  focus: {
    background: {
      color: {
        dark: buttonFlat.backgroundColorAccentFocusDark,
        light: buttonFlat.backgroundColorAccentFocus,
      },
    },
    border: {
      color: {
        dark: buttonFlat.backgroundColorAccentFocusDark,
        light: buttonFlat.backgroundColorAccentFocus,
      },
    },
    boxShadow: {
      dark: buttonFlat.boxShadowFocusDark,
      light: buttonFlat.boxShadowFocus,
    },
    color: {
      dark: buttonFlat.colorAccentFocusDark,
      light: buttonFlat.colorAccentFocus,
    },
  },

  hover: {
    background: {
      color: {
        dark: buttonFlat.backgroundColorAccentDark,
        light: buttonFlat.backgroundColorAccent,
      },
    },
    border: {
      color: {
        dark: buttonFlat.backgroundColorAccentHoverDark,
        light: buttonFlat.backgroundColorAccentHover,
      },
    },
    boxShadow: {
      dark: buttonFlat.boxShadowAccentHoverDark,
      light: buttonFlat.boxShadowAccentHover,
    },
    color: {
      dark: buttonFlat.colorAccentDark,
      light: buttonFlat.colorAccent,
    },
  },

  divider: {
    color: normalize(buttonDivider.colorAccent),

    disabled: {
      color: normalize(buttonDivider.colorAccentDisabled),
    },
  },
};

export default accentStyle;
