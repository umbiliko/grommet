import { css } from 'styled-components';
import { ExtendType, PartialThemeGenerator } from '.';
import color from '../quantum-ux/color';
import input from '../quantum-ux/input';

export const control = {
  borderBottomStyle: input.borderStyle,
  borderBottomWidth: input.borderWidthBottom,
  borderLeft: 'none',
  borderRight: 'none',
  borderTop: 'none',

  focus: {
    borderBottomColor: color.focus,
    borderBottomStyle: input.borderStyle,
    borderBottomWidth: input.borderWidthBottom,
  },

  hover: {
    borderBottomColor: color.neutral1,
    borderBottomStyle: input.borderStyle,
    borderBottomWidth: input.borderWidthBottom,
  },

  input: {
    active: {
      border: 'none',
    },
    focus: {
      border: 'none',
    },
    hover: {
      border: 'none',
    },
  },
};

export type ControlTheme = typeof control & {
  extend?: ExtendType;
};

const extend = css`
  right: 0;
  top: 40%;
  border-radius: 0px;
  border-bottom: ${control.borderBottomWidth} ${input.border};
  border-left: ${control.borderLeft};
  border-right: ${control.borderRight};
  border-top: ${control.borderTop};
  input {
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.375;
    border-bottom: 0px;
    &:hover,
    &:active,
    &:focus {
      border: none;
    }
  }
  div > div:nth-child(2) {
    margin: 0;
  }
  :focus {
    border-bottom: ${control.focus.borderBottomWidth}
      ${control.focus.borderBottomStyle} ${control.focus.borderBottomColor};
  }
  :hover {
    border-bottom: ${control.hover.borderBottomWidth}
      ${control.hover.borderBottomStyle} ${control.hover.borderBottomColor};
  }
`;

const generator: PartialThemeGenerator<'control'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    control: {
      ...control,
      extend,
    },
  };
};

export default generator;
