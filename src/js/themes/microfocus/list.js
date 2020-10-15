import { PartialThemeGenerator } from '.';

export const list = {};

const generator: PartialThemeGenerator<'list'> = ({
  baseSpacing = 24,
  scale = 6,
}) => ({
  list,
});

export default generator;
