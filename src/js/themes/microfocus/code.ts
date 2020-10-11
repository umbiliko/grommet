import text from '../quantum-ux/text';
import { PartialThemeGenerator } from '.';

export const code = {
  background: {
    dark: text.codeBackgroundColorDark,
    light: text.codeBackgroundColor,
  },
  color: {
    dark: text.codeFontColorDark,
    light: text.codeFontColor,
  },
  fontWeight: text.codeFontWeight,
};

const generator: PartialThemeGenerator<'code'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    code,
  };
};

export default generator;
