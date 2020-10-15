import { PartialThemeGenerator } from '.';

export const dataTable = {};

const generator: PartialThemeGenerator<'dataTable'> = ({
  baseSpacing = 24,
  scale = 6,
}) => ({
  dataTable,
});

export default generator;
