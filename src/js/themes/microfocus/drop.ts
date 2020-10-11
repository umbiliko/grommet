import { PartialThemeGenerator } from '.';

export const drop = {};

const generator: PartialThemeGenerator<'drop'> = ({
  baseSpacing = 24,
  scale = 6,
}) => ({
  drop,
});

export default generator;
