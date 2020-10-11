import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import { ButtonProps } from '../../components/Button';
import radio from '../quantum-ux/radio';
import radioButtonControlSize from '../quantum-ux/radio-button-control-size';
import radioButtonSize from '../quantum-ux/radio-button-size';
import radioLabel from '../quantum-ux/radio-label';
import radioTick from '../quantum-ux/radio-tick';
import { backgroundColor, borderColor } from '../utils/css';
import pick from '../utils/pick';

export const radioButton = {
  borderColor: {
    dark: radio.borderColorDark,
    light: radio.borderColor,
  },

  color: {
    dark: radioLabel.colorDark,
    light: radioLabel.color,
  },

  width: radio.size,
  height: radio.size,

  innerWidth: radioButtonSize,
  innerHeight: radioButtonSize,

  focus: {
    background: {
      color: {
        dark: radio.backgroundColorFocusDark,
        light: radio.backgroundColorFocus,
      },
    },
    border: {
      color: {
        dark: radio.borderColorFocusDark,
        light: radio.borderColorFocus,
      },
    },
    boxShadow: {
      dark: radio.boxShadowFocusDark,
      light: radio.boxShadowFocus,
    },
  },

  hover: {
    background: {
      color: {
        dark: radio.backgroundColorHoverDark,
        light: radio.backgroundColorHover,
      },
    },
    border: {
      color: {
        dark: radio.borderColorHoverDark,
        light: radio.borderColorHover,
      },
    },
    color: {
      dark: radioLabel.colorHoverDark,
      light: radioLabel.colorHover,
    },
  },

  checked: {
    animation: radio.animationChecked,
    color: {
      dark: radioLabel.colorDark,
      light: radioLabel.color,
    },

    focus: {
      color: {
        dark: radioLabel.colorDark,
        light: radioLabel.color,
      },
    },
  },

  tick: {
    height: radioTick.size,
    width: radioTick.size,
    left: radioButtonControlSize,
    top: radioButtonControlSize,

    checked: {
      animation: radio.animationChecked,
    },
  },
};

export type RadioButtonTheme = typeof radioButton;

const baseStyle = css`
  border-color: ${borderColor(radioButton)};
  color: ${pick(radioButton.color)};

  &:hover {
    color: ${pick(radioButton.hover.color)};
  }

  input&:checked {
    border-color: ${borderColor(radioButton.hover)};
  }

  div {
    width: ${radio.size};
    height: ${radio.size};
    > svg {
      width: ${radioButtonSize};
      height: ${radioButtonSize};
    }
  }

  input&:checked + input&:after {
    height: ${radioButton.tick.height};
    left: ${radioButton.tick.left};
    top: ${radioButton.tick.top};
    width: ${radioButton.tick.width};
  }

  input&:focus {
    border-color: ${borderColor(radioButton.focus)};
    box-shadow: ${pick(radioButton.focus.boxShadow)};
  }

  &:checked {
    input&:focus {
      animation: ${radioButton.checked.animation};
      box-shadow: ${pick(radioButton.focus.boxShadow)};
      border-color: ${borderColor(radioButton.focus)};
      background-color: ${backgroundColor(radioButton.focus)};
      input&:after {
        animation: ${radioButton.tick.checked.animation};
      }
    }
    color: ${pick(radioButton.checked.focus.color)};
  }
`;

const notDisabledStyle = css`
  input&:hover {
    border-color: ${borderColor(radioButton.hover)};
    background-color: ${backgroundColor(radioButton.hover)};
  }
`;

const extend = css<ButtonProps>`
  ${baseStyle}
  ${(props: any) => !props.disabled && notDisabledStyle}
`;

const generator: PartialThemeGenerator<'radioButton'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    radioButton: {
      ...radioButton,
      extend,
    },
  };
};

export default generator;
