import { deepMerge } from 'grommet-icons/utils';
import button from '../../../quantum-ux/button';
import buttonDivider from '../../../quantum-ux/button-divider';
import { normalize } from '../../../utils/pick';
import defaultStyle from './default';

const secondaryStyle = deepMerge({}, defaultStyle, {
  backgroundColor: {
    dark: button.backgroundColorSecondaryDark,
    light: button.backgroundColorSecondary,
  },
  color: {
    dark: button.colorSecondaryDark,
    light: button.colorSecondary,
  },
  borderColor: {
    dark: button.borderColorSecondaryDark,
    light: button.borderColorSecondary,
  },

  active: {
    backgroundColor: {
      dark: button.backgroundColorSecondaryActiveDark,
      light: button.backgroundColorSecondaryActive,
    },
    color: {
      dark: button.colorSecondaryActiveDark,
      light: button.colorSecondaryActive,
    },
    borderColor: {
      dark: button.borderColorSecondaryActiveDark,
      light: button.borderColorSecondaryActive,
    },
    boxShadow: {
      dark: button.boxShadowSecondaryActiveDark,
      light: button.boxShadowSecondaryActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: button.backgroundColorSecondaryDisabledDark,
      light: button.backgroundColorSecondaryDisabled,
    },
    color: {
      dark: button.colorSecondaryDisabledDark,
      light: button.colorSecondaryDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: button.backgroundColorSecondaryFocusDark,
      light: button.backgroundColorSecondaryFocus,
    },
    color: {
      dark: button.colorSecondaryFocusDark,
      light: button.colorSecondaryFocus,
    },
    borderColor: {
      dark: button.borderColorSecondaryFocusDark,
      light: button.borderColorSecondaryFocus,
    },
    boxShadow: {
      dark: button.boxShadowFocus,
      light: button.boxShadowFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: button.backgroundColorSecondaryHoverDark,
      light: button.backgroundColorSecondaryHover,
    },
    color: {
      dark: button.colorSecondaryHoverDark,
      light: button.colorSecondaryHover,
    },
    borderColor: {
      dark: button.borderColorSecondaryHoverDark,
      light: button.borderColorSecondaryHover,
    },
    boxShadow: {
      dark: button.boxShadowSecondaryHoverDark,
      light: button.boxShadowSecondaryHover,
    },
  },

  divider: {
    color: normalize(buttonDivider.colorSecondary),

    disabled: {
      color: normalize(buttonDivider.colorSecondaryDisabled),
    },
  },
});

export default secondaryStyle;
