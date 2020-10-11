import { PartialThemeGenerator } from '.';

export const video = {};

const generator: PartialThemeGenerator<'video'> = ({
  baseSpacing = 24,
  scale = 6,
}) => ({
  video,
});

export default generator;
