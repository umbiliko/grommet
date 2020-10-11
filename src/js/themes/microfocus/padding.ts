import { PartialThemeGenerator } from '.';

export const padding = {};

const generator: PartialThemeGenerator<'box' | 'text'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    global: {},
    box: {},
    text: {},
  };
};

export default generator;
