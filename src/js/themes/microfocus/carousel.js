import { PartialThemeGenerator } from '.';

export const carousel = {};

const generator: PartialThemeGenerator<'carousel'> = ({
  baseSpacing = 24,
  scale = 6,
}) => ({
  carousel,
});

export default generator;
