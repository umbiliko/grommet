import { PartialThemeGenerator } from '.';

export const worldMap = {};

const generator: PartialThemeGenerator<'worldMap'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    worldMap,
  };
};

export default generator;
