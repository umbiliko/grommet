import { PartialThemeGenerator } from '.';

export const diagram = {};

const generator: PartialThemeGenerator<'diagram'> = ({
  baseSpacing = 24,
  scale = 6,
}) => ({
  diagram,
});

export default generator;
