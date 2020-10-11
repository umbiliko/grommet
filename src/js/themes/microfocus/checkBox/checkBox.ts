import { css } from 'styled-components';
import { CheckBoxProps } from '../../../components/CheckBox';
import _checkbox from '../../quantum-ux/checkbox';
import _checkboxLabel from '../../quantum-ux/checkbox-label';
import _common from '../../quantum-ux/common';
import themed from '../../utils/pick';
import { checkboxTick } from './checkboxTick';

export const checkBox = {
  borderColor: {
    dark: _checkbox.borderColorDark,
    light: _checkbox.borderColor,
  },
  borderRadius: _checkbox.borderRadius,
  backgroundColor: {
    dark: _checkbox.backgroundColorDark,
    light: _checkbox.backgroundColor,
  },
  size: _checkbox.size,
  transition: _checkbox.transition,

  focus: {
    borderColor: {
      dark: _checkbox.borderColorFocusDark,
      light: _checkbox.borderColorFocus,
    },
  },

  hover: {
    backgroundColor: {
      dark: _checkbox.backgroundColorHoverDark,
      light: _checkbox.backgroundColorHover,
    },
    borderColor: {
      dark: _checkbox.borderColorHoverDark,
      light: _checkbox.borderColorHover,
    },
  },

  checked: {
    backgroundColor: {
      dark: _checkbox.backgroundColorCheckedDark,
      light: _checkbox.backgroundColorChecked,
    },
    borderColor: {
      dark: _checkbox.borderColorCheckedDark,
      light: _checkbox.borderColorChecked,
    },
    hover: {
      backgroundColor: {
        dark: _checkbox.backgroundColorHoverCheckedDark,
        light: _checkbox.backgroundColorHoverChecked,
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
    border: 1px solid ${themed(checkBox.borderColor)};
    border-radius: ${checkBox.borderRadius};
    transition: ${checkBox.transition};
    -webkit-transition: ${checkBox.transition};
    &:hover {
      background-color: ${themed(checkBox.hover.backgroundColor)};
      border-color: ${themed(checkBox.hover.borderColor)};
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
    border-color: ${themed(checkBox.checked.borderColor)};
    background-color: ${themed(checkBox.checked.backgroundColor)};
    stroke: ${themed(checkboxTick.color)};
    &:focus {
      animation: ${checkboxTick.animationChecked};
      border-color: ${themed(checkBox.focus.borderColor)};
      box-shadow: ${_common.boxShadowFocus};
    }
    &:hover {
      border: 1px solid ${themed(checkBox.hover.borderColor)};
      background-color: ${themed(checkBox.checked.hover.backgroundColor)};
    }
  }
`;

export const checkBoxStyle = css<CheckBoxProps>`
  ${(props: any) => !props.checked && !props.disabled && checkBoxUncheckedStyle}
  ${(props: any) => props.indeterminate && checkBoxIntermediateStyle}
  ${(props: any) => props.checked && !props.disabled && checkBoxCheckedStyle}
`;
