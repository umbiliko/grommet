import { css } from 'styled-components';
import { CheckBoxProps } from '../../../components/CheckBox';
import _checkbox from '../../quantum-ux/checkbox';
import _checkboxSwitch from '../../quantum-ux/checkbox-switch';
import themed from '../../utils/pick';
import { checkboxSwitchCircle } from './checkboxSwitchCircle';

export const checkBoxSwitch = {
  backgroundColor: {
    dark: _checkboxSwitch.backgroundColorDark,
    light: _checkboxSwitch.backgroundColor,
  },
  borderRadius: _checkboxSwitch.borderRadius,
  height: _checkboxSwitch.height,
  width: _checkboxSwitch.width,

  disabled: {
    backgroundColor: {
      dark: _checkboxSwitch.backgroundColorDisabledDark,
      light: _checkboxSwitch.backgroundColorDisabled,
    },
  },

  focus: {
    backgroundColor: {
      dark: _checkboxSwitch.backgroundColorFocusDark,
      light: _checkboxSwitch.backgroundColorFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: _checkboxSwitch.backgroundColorHoverDark,
      light: _checkboxSwitch.backgroundColorHover,
    },
    borderColor: {
      dark: _checkbox.borderColorHoverDark,
      light: _checkbox.borderColorHover,
    },
    border: _checkboxSwitch.borderHover,
  },

  checked: {
    disabled: {
      backgroundColor: {
        dark: _checkboxSwitch.backgroundColorDisabledCheckedDark,
        light: _checkboxSwitch.backgroundColorDisabledChecked,
      },
    },
    focus: {
      backgroundColor: {
        dark: _checkboxSwitch.backgroundColorFocusCheckedDark,
        light: _checkboxSwitch.backgroundColorFocusChecked,
      },
    },
    hover: {
      backgroundColor: {
        dark: _checkboxSwitch.backgroundColorHoverCheckedDark,
        light: _checkboxSwitch.backgroundColorHoverChecked,
      },
    },
  },
};

export const toggleBaseStyle = css`
  div {
    animation: none;
    background-color: ${themed(checkBoxSwitch.backgroundColor)};
    border-radius: ${checkBoxSwitch.borderRadius};
    height: ${checkBoxSwitch.height};
    width: ${checkBoxSwitch.width};
    -webkit-animation: none;
  }
  div > span {
    border: 0px;
  }
  div > span > span {
    width: ${checkboxSwitchCircle.size};
    height: ${checkboxSwitchCircle.size};
    top: 0px;
    left: calc(${checkboxSwitchCircle.width} / 2);
    &:after {
      height: ${checkboxSwitchCircle.size};
      width: ${checkboxSwitchCircle.size};
      top: 0px;
      left: -${checkboxSwitchCircle.width} / 2;
      border: ${checkboxSwitchCircle.border};
      transform: none;
      -ms-transform: none;
      -webkit-transform: none;
      transition: ${checkboxSwitchCircle.transition};
      -webkit-transition: ${checkboxSwitchCircle.transition};
      animation: none;
      -webkit-animation: none;
    }
  }
  div {
    &:focus > span {
      box-shadow: none;
      background-color: ${themed(checkBoxSwitch.focus.backgroundColor)};
      &:after {
        box-shadow: ${themed(checkboxSwitchCircle.focus.boxShadow)};
        border-color: ${themed(checkboxSwitchCircle.focus.borderColor)};
        background-color: ${themed(checkboxSwitchCircle.focus.backgroundColor)};
        animation: ${checkboxSwitchCircle.animationChecked};
      }
    }
  }
`;

export const toggleCheckedStyle = css`
  div {
    div > span {
      background-color: ${themed(checkBoxSwitch.checked.focus.backgroundColor)};
    }
    div > span&:focus {
      &:after {
        box-shadow: ${themed(checkboxSwitchCircle.checked.focus.boxShadow)};
        border-color: ${themed(checkboxSwitchCircle.checked.focus.borderColor)};
        background-color: ${themed(
          checkboxSwitchCircle.checked.focus.backgroundColor,
        )};
        animation: ${checkboxSwitchCircle.animationChecked};
      }
    }
  }
`;

export const toggleEnabledStyle = css`
  :hover {
    div > span {
      border-color: ${themed(checkBoxSwitch.hover.borderColor)};
      background-color: ${themed(checkBoxSwitch.backgroundColor)};
    }
    &:after {
      width: calc(
        ${checkboxSwitchCircle.size} + ${checkboxSwitchCircle.hover.growth}
      );
      border-color: ${themed(checkboxSwitchCircle.hover.borderColor)};
      left: -calc(
        ${checkboxSwitchCircle.height} + ${checkboxSwitchCircle.borderWidth}
      );
      background-color: ${themed(
        checkboxSwitchCircle.checked.hover.backgroundColor,
      )};
      border-color: ${themed(checkboxSwitchCircle.hover.borderColor)};
    }
  }
`;

export const toggleDisabledStyle = css`
  :hover {
    border-color: ${themed(checkBoxSwitch.hover.borderColor)};
    background-color: ${themed(checkBoxSwitch.backgroundColor)};
  }
`;

export const toggleStyle = css<CheckBoxProps>`
  ${toggleBaseStyle}
  ${(props: any) => props.checked && !props.disabled && toggleCheckedStyle}
  ${(props: any) => !props.disabled && toggleDisabledStyle}
`;
