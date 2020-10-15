import { PartialThemeGenerator } from '.';
import _icon from '../quantum-ux/icon';

export const icon = {
  color: {
    dark: _icon.colorDark,
    light: _icon.color,
  },
  fontFamily: 'QuantumIcons',
  fontWeight: 'normal',
  letterSpacing: 'normal',

  10: {
    width: _icon.width10,
    height: _icon.height10,
  },

  small: {
    width: _icon.widthSmall,
    height: _icon.heightSmall,
  },
  medium: {
    height: _icon.height,
    width: _icon.width,
  },
  large: {
    width: _icon.widthLarge,
    height: _icon.heightLarge,
  },
  xlarge: {
    width: _icon.widthXlarge,
    height: _icon.heightXlarge,
  },
  xxlarge: {
    width: _icon.widthXxlarge,
    height: _icon.heightXxlarge,
  },
  xxxlarge: {
    width: _icon.widthXxxlarge,
    height: _icon.heightXxxlarge,
  },

  hover: {
    color: {
      dark: _icon.colorDarkHover,
      light: _icon.colorHover,
    },
  },
  focus: {
    color: {
      dark: _icon.colorDarkFocus,
      light: _icon.colorFocus,
    },
  },
  active: {
    color: {
      dark: _icon.colorDarkActive,
      light: _icon.colorActive,
    },
  },
  disabled: {
    color: {
      dark: _icon.colorDarkDisabled,
      light: _icon.colorDisabled,
    },
  },
};

const generator: PartialThemeGenerator<'icon'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    icon: {
      // colors,
      size: {
        small: _icon.widthSmall,
        medium: _icon.width,
        large: _icon.widthLarge,
        xlarge: _icon.widthXlarge,
      },
    },
  };
};

export default generator;
