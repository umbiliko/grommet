import { PartialThemeGenerator } from '.';

export const clock = {};

const generator: PartialThemeGenerator<'clock'> = ({
  baseSpacing = 24,
  scale = 6,
}) => ({
  clock,
});

export default generator;
