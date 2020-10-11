import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import color from '../quantum-ux/color';
import input from '../quantum-ux/input';
import inputTextArea from '../quantum-ux/input-text-area';
import text from '../quantum-ux/text';

export const textArea = {
  borderColor: inputTextArea.borderColor,
  borderWidth: inputTextArea.borderWidth,
  borderRadius: 0,
  borderStyle: inputTextArea.borderStyle,
  height: 'auto',
  padding: inputTextArea.padding,
  resize: 'vertical',
};

const generator: PartialThemeGenerator<'textArea'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    textArea: {
      ...textArea,
      extend: css`
        border-color: ${textArea.borderColor};
        border-radius: ${textArea.borderRadius};
        border-style: ${textArea.borderStyle};
        border-width: ${textArea.borderWidth};
        padding: ${textArea.padding};
        resize: ${textArea.resize};
        width: ${input.width};
        height: ${textArea.height};
        min-height: calc(${inputTextArea.minHeight} + 3px);

        border-bottom: ${input.borderWidthBottom} ${input.border};
        padding: ${inputTextArea.padding};
        box-shadow: none;
        font-size: ${text.bodyFontSize};
        font-weight: ${text.fontWeight};
        font-style: normal;

        &:focus:hover {
          border-width: ${inputTextArea.borderWidth};
          border-style: ${inputTextArea.borderStyle};
          border-color: ${color.primary};
          padding: ${inputTextArea.padding};
          box-shadow: ${input.boxShadowFocus};
          outline: ${input.outlineFocus};
        }
        &:focus {
          border-width: ${inputTextArea.borderWidth};
          border-style: ${inputTextArea.borderStyle};
          border-color: ${color.primary};
          padding: ${inputTextArea.padding};
          box-shadow: ${input.boxShadowFocus};
          outline: ${input.outlineFocus};
        }
        &:hover {
          border-width: ${inputTextArea.borderWidth};
          border-style: ${inputTextArea.borderStyle};
          border-color: ${input.borderColorHover};
          padding: ${inputTextArea.padding};
        }
      `,
    },
  };
};

export default generator;
