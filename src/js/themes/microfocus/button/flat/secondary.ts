import buttonDivider from '../../../quantum-ux/button-divider';
import buttonFlat from '../../../quantum-ux/button-flat';
import { normalize } from '../../../utils/pick';
import defaultStyle, { FlatButtonStyle } from './default';

export const secondaryStyle: FlatButtonStyle = {
  ...defaultStyle,
  backgroundColor: {
    dark: buttonFlat.backgroundColorSecondaryDark,
    light: buttonFlat.backgroundColorSecondary,
  },
  color: {
    dark: buttonFlat.colorSecondaryDark,
    light: buttonFlat.colorSecondary,
  },

  active: {
    backgroundColor: {
      dark: buttonFlat.backgroundColorSecondaryActiveDark,
      light: buttonFlat.backgroundColorSecondaryActive,
    },
    color: {
      dark: buttonFlat.colorSecondaryActiveDark,
      light: buttonFlat.colorSecondaryActive,
    },
    boxShadow: {
      dark: buttonFlat.boxShadowSecondaryActiveDark,
      light: buttonFlat.boxShadowSecondaryActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: buttonFlat.backgroundColorSecondaryDisabledDark,
      light: buttonFlat.backgroundColorSecondaryDisabled,
    },
    color: {
      dark: buttonFlat.colorSecondaryDisabledDark,
      light: buttonFlat.colorSecondaryDisabled,
    },
    boxShadow: {
      dark: buttonFlat.boxShadowSecondaryDisabledDark,
      light: buttonFlat.boxShadowSecondaryDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: buttonFlat.backgroundColorSecondaryFocusDark,
      light: buttonFlat.backgroundColorSecondaryFocus,
    },
    borderColor: {
      dark: buttonFlat.borderColorFocusDark,
      light: buttonFlat.borderColorFocus,
    },
    boxShadow: {
      dark: buttonFlat.boxShadowFocusDark,
      light: buttonFlat.boxShadowFocus,
    },
    color: {
      dark: buttonFlat.colorSecondaryFocusDark,
      light: buttonFlat.colorSecondaryFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: buttonFlat.backgroundColorSecondaryHoverDark,
      light: buttonFlat.backgroundColorSecondaryHover,
    },
    color: {
      dark: buttonFlat.colorSecondaryHoverDark,
      light: buttonFlat.colorSecondaryHover,
    },
    boxShadow: {
      dark: buttonFlat.boxShadowSecondaryHoverDark,
      light: buttonFlat.boxShadowSecondaryHover,
    },
  },

  divider: {
    color: normalize(buttonDivider.colorSecondary),

    disabled: {
      color: normalize(buttonDivider.colorSecondaryDisabled),
    },
  },
};

export default secondaryStyle;
