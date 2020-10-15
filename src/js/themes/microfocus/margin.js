import { PartialTheme, PartialThemeGenerator } from '.';

export const margin = {};

const generator: PartialThemeGenerator<'box'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    global: {},
    box: {},
  };
};

export default generator;
