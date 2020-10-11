import { deepMerge } from 'grommet-icons/utils';
import button from '../../../quantum-ux/button';
import buttonDivider from '../../../quantum-ux/button-divider';
import { normalize } from '../../../utils/pick';
import defaultStyle from './default';

const accentStyle = deepMerge({}, defaultStyle, {
  backgroundColor: {
    dark: button.backgroundColorAccentDark,
    light: button.backgroundColorAccent,
  },
  color: {
    dark: button.colorAccentDark,
    light: button.colorAccent,
  },
  borderColor: {
    dark: button.borderColorAccentDark,
    light: button.borderColorAccent,
  },

  active: {
    backgroundColor: {
      dark: button.backgroundColorAccentActiveDark,
      light: button.backgroundColorAccentActive,
    },
    color: {
      dark: button.colorAccentActiveDark,
      light: button.colorAccentActive,
    },
    borderColor: {
      dark: button.borderColorAccentActiveDark,
      light: button.borderColorAccentActive,
    },
    boxShadow: {
      dark: button.boxShadowAccentActiveDark,
      light: button.boxShadowAccentActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: button.backgroundColorAccentDisabledDark,
      light: button.backgroundColorAccentDisabled,
    },
    color: {
      dark: button.colorAccentDisabledDark,
      light: button.colorAccentDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: button.backgroundColorAccentFocusDark,
      light: button.backgroundColorAccentFocus,
    },
    color: {
      dark: button.colorAccentFocusDark,
      light: button.colorAccentFocus,
    },
    borderColor: {
      dark: button.backgroundColorAccentFocusDark,
      light: button.backgroundColorAccentFocus,
    },
    boxShadow: {
      dark: button.boxShadowFocus,
      light: button.boxShadowFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: button.backgroundColorAccentDark,
      light: button.backgroundColorAccent,
    },
    color: {
      dark: button.colorAccentDark,
      light: button.colorAccent,
    },
    borderColor: {
      dark: button.backgroundColorAccentHoverDark,
      light: button.backgroundColorAccentHover,
    },
    boxShadow: {
      dark: button.boxShadowAccentHoverDark,
      light: button.boxShadowAccentHover,
    },
  },

  divider: {
    color: normalize(buttonDivider.colorAccent),

    disabled: {
      color: normalize(buttonDivider.colorAccentDisabled),
    },
  },
});

export default accentStyle;
