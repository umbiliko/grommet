import { PartialThemeGenerator } from '.';

export const rangeSelector = {};

const generator: PartialThemeGenerator<'rangeSelector'> = ({
  baseSpacing = 24,
  scale = 6,
}) => ({
  rangeSelector,
});

export default generator;
