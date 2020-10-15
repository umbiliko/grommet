import { PartialThemeGenerator } from '.';

export const drop = {
  background: {
    dark: '#333333',
    light: '#ffffff'
  },
  border: {
    radius: '0px'
  },
  shadowSize: 'small',
  zIndex: 20
};

const generator: PartialThemeGenerator<'drop'> = ({
  baseSpacing = 24,
  scale = 6,
}) => ({
  drop,
});

export default generator;
