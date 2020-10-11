import _checkboxSwitch from '../../quantum-ux/checkbox-switch';
import _checkboxSwitchCircle from '../../quantum-ux/checkbox-switch-circle';

export const checkboxSwitchCircle = {
  animationChecked: _checkboxSwitchCircle.animationChecked,
  backgroundColor: {
    dark: _checkboxSwitchCircle.backgroundColorDark,
    light: _checkboxSwitchCircle.backgroundColor,
  },
  border: _checkboxSwitchCircle.border,
  borderColor: {
    dark: _checkboxSwitchCircle.borderColorDark,
    light: _checkboxSwitchCircle.borderColor,
  },
  borderWidth: _checkboxSwitchCircle.borderWidth,
  height: _checkboxSwitchCircle.height,
  size: _checkboxSwitchCircle.size,
  transition: _checkboxSwitchCircle.transition,
  width: _checkboxSwitchCircle.width,

  focus: {
    backgroundColor: {
      dark: _checkboxSwitchCircle.backgroundColorFocusDark,
      light: _checkboxSwitch.backgroundColorFocus,
    },
    borderColor: {
      dark: _checkboxSwitchCircle.borderColorFocusDark,
      light: _checkboxSwitchCircle.borderColorFocus,
    },
    boxShadow: {
      dark: _checkboxSwitchCircle.boxShadowFocusDark,
      light: _checkboxSwitchCircle.boxShadowFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: _checkboxSwitchCircle.backgroundColorHoverDark,
      light: _checkboxSwitchCircle.backgroundColorHover,
    },
    borderColor: {
      dark: _checkboxSwitchCircle.borderColorHoverDark,
      light: _checkboxSwitchCircle.borderColorHover,
    },
    growth: _checkboxSwitchCircle.growthHover,
    width: _checkboxSwitchCircle.widthHover,
  },

  checked: {
    border: _checkboxSwitchCircle.borderChecked,
    borderColor: {
      dark: _checkboxSwitchCircle.borderColorCheckedDark,
      light: _checkboxSwitchCircle.borderColorChecked,
    },

    focus: {
      backgroundColor: {
        dark: _checkboxSwitchCircle.backgroundColorFocusCheckedDark,
        light: _checkboxSwitchCircle.backgroundColorFocusChecked,
      },
      borderColor: {
        dark: _checkboxSwitchCircle.borderColorFocusCheckedDark,
        light: _checkboxSwitchCircle.borderColorFocusChecked,
      },
      boxShadow: {
        dark: _checkboxSwitchCircle.boxShadowFocusCheckedDark,
        light: _checkboxSwitchCircle.boxShadowFocusChecked,
      },
    },
    hover: {
      backgroundColor: {
        dark: _checkboxSwitchCircle.backgroundColorHoverCheckedDark,
        light: _checkboxSwitchCircle.backgroundColorHoverChecked,
      },
      width: _checkboxSwitchCircle.widthHoverChecked,
    },
  },
};
