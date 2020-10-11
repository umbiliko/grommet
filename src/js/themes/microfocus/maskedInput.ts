import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import color from '../quantum-ux/color';
import input from '../quantum-ux/input';

export const maskedInput = {};

export type MaskedTheme = typeof maskedInput;

const generator: PartialThemeGenerator<'maskedInput'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    maskedInput: {
      extend: css`
        border-radius: 0px;
        border-top: none;
        border-left: none;
        border-right: none;
        padding-left: 0px;
        padding-right: 0px;
        font-size: ${input.fontSize};
        font-style: normal;
        font-weight: 100;

        border-bottom: ${input.borderWidthBottom} ${input.border};
        ${(props: any) =>
          props.border != 'none'
            ? `
            border-bottom: ${input.borderWidthBottom} ${input.border};
            &:focus {
              border-bottom: ${input.borderWidthBottom} ${input.borderStyle} ${color.focus};
            }
            &:hover {
              border-bottom: ${input.borderWidthBottom} ${input.borderStyle} ${color.neutral1};
            }`
            : `border-bottom: none;`}
      `,
    },
  };
};

export default generator;
