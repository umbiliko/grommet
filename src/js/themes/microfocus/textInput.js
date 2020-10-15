import { css } from 'styled-components';
import color from '../quantum-ux/color';
import input from '../quantum-ux/input';
import { PartialThemeGenerator } from '.';

const textInput: PartialThemeGenerator<'textInput'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    textInput: {
      extend: css<any>`
        border-radius: 0px;
        border-top: none;
        border-left: none;
        border-right: none;
        padding-left: 0px;
        padding-right: 0px;
        font-size: ${input.fontSize};
        font-style: normal;
        font-weight: 100;
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

export default textInput;
