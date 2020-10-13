import { css } from 'styled-components';
import { CheckBoxProps } from '../../../components/CheckBox';
import _checkbox from '../../quantum-ux/checkbox';
import _checkboxLabel from '../../quantum-ux/checkbox-label';
import _common from '../../quantum-ux/common';
import { backgroundColor, borderColor } from '../../utils/css';
import themed from '../../utils/pick';
import { checkboxTick } from './checkboxTick';

export const checkBox = {
  border: {
    color: {
      dark: _checkbox.borderColorDark,
      light: _checkbox.borderColor,
    },
    radius: _checkbox.borderRadius,
  },
  background: {
    color: {
      dark: _checkbox.backgroundColorDark,
      light: _checkbox.backgroundColor,
    },
  },
  size: _checkbox.size,
  transition: _checkbox.transition,

  focus: {
    border: {
      color: {
        dark: _checkbox.borderColorFocusDark,
        light: _checkbox.borderColorFocus,
      },
    },
  },

  hover: {
    background: {
      color: {
        dark: _checkbox.backgroundColorHoverDark,
        light: _checkbox.backgroundColorHover,
      },
    },
    border: {
      color: {
        dark: _checkbox.borderColorHoverDark,
        light: _checkbox.borderColorHover,
      },
    },
  },

  checked: {
    background: {
      color: {
        dark: _checkbox.backgroundColorCheckedDark,
        light: _checkbox.backgroundColorChecked,
      },
    },
    border: {
      color: {
        dark: _checkbox.borderColorCheckedDark,
        light: _checkbox.borderColorChecked,
      },
    },
    hover: {
      background: {
        color: {
          dark: _checkbox.backgroundColorHoverCheckedDark,
          light: _checkbox.backgroundColorHoverChecked,
        },
      },
    },
  },

  label: {
    color: {
      dark: _checkboxLabel.colorDark,
      light: _checkboxLabel.color,
    },
    disabled: {
      color: {
        dark: _checkboxLabel.colorDisabledDark,
        light: _checkboxLabel.colorDisabled,
      },
    },
  },
};

export const checkBoxUncheckedStyle = css`
  div {
    width: ${checkBox.size};
    height: ${checkBox.size};
    border: 1px solid ${borderColor(checkBox)};
    border-radius: ${checkBox.border.radius};
    transition: ${checkBox.transition};
    -webkit-transition: ${checkBox.transition};
    &:hover {
      background-color: ${backgroundColor(checkBox.hover)};
      border-color: ${borderColor(checkBox.hover)};
    }
  }
`;

export const checkBoxIntermediateStyle = css`
  input[type='checkbox'] + div:after {
    opacity: 1;
    box-sizing: content-box;
    position: absolute;
    content: '';
    width: 6px;
    height: 6px;
    margin-left: 0;
    background-color: #0073e7;
    border: 0;
    -webkit-transform: none;
    -moz-transform: none;
    -o-transform: none;
    -ms-transform: none;
    transform: none;
    transition: none;
  }
`;

export const checkBoxCheckedStyle = css`
  div {
    border: 0px;
    width: ${checkBox.size};
    height: ${checkBox.size};
  }
  div > svg {
    width: ${checkBox.size};
    height: ${checkBox.size};
    border-color: ${borderColor(checkBox.checked)};
    background-color: ${backgroundColor(checkBox.checked)};
    stroke: ${themed(checkboxTick.color)};
    &:focus {
      animation: ${checkboxTick.animationChecked};
      border-color: ${borderColor(checkBox.focus)};
      box-shadow: ${_common.boxShadowFocus};
    }
    &:hover {
      border: 1px solid ${borderColor(checkBox.hover)};
      background-color: ${backgroundColor(checkBox.checked.hover)};
    }
  }
`;

export const checkBoxStyle = css<CheckBoxProps>`
  ${(props: any) => !props.checked && !props.disabled && checkBoxUncheckedStyle}
  ${(props: any) => props.indeterminate && checkBoxIntermediateStyle}
  ${(props: any) => props.checked && !props.disabled && checkBoxCheckedStyle}
`;
