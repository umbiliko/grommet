import { PartialThemeGenerator } from '.';

export const calendar = {};

const generator: PartialThemeGenerator<'calendar'> = ({
  baseSpacing = 24,
  scale = 6,
}) => ({
  calendar,
});

export default generator;
