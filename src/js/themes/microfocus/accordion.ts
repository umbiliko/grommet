import { PartialThemeGenerator } from '.';

export const accordion = {};

const generator: PartialThemeGenerator<'accordion'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    accordion: {},
  };
};

export default generator;
