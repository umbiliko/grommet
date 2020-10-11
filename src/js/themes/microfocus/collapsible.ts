import { PartialThemeGenerator } from '.';

export const collapsible = {};

export type CollapsibleTheme = typeof collapsible;

const generator: PartialThemeGenerator<'collapsible'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    collapsible,
  };
};

export default generator;
