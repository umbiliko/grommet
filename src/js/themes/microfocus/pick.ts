import { ColorType } from 'grommet/utils';
import { undefinedColor } from './base/colors';
import { StyledProps } from 'styled-components';

export interface normalize {
  dark: string;
  light: string;
}

const pick = <P = any>(
  values: string | normalize | Record<string, string>,
  base: string = 'light'
) => {
  switch (typeof values) {
    case 'object':
      return (props: StyledProps<P>): string => {
        let mode = props?.theme?.mode || base;
        const themeValue = typeof mode === 'function' ? mode(values) : values[mode];
        return typeof themeValue === 'function' ? themeValue(props) : themeValue;
      };
    case 'string':
      () => values;
    default:
      console.warn('Invalid theme choices', values);
      return () => 'none';
  }
};

export function normalize(color: ColorType): normalize {
  if (!color) {
    console.warn('Color not defined at', color);
    return undefinedColor;
  }
  return typeof color === 'string'
    ? { dark: color, light: color }
    : {
        dark: color.dark || color.light || undefinedColor.light,
        light: color.light || undefinedColor.dark,
      };
}

export default pick;
