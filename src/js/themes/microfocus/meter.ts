import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import colors from './colors';

export const meter = {
  color: colors.brand,
};

export type MeterTheme = typeof meter;

const generator: PartialThemeGenerator<'meter'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    meter: {
      ...meter,
      extend: css<any>`
        stroke-width: 10px;
        ${(props: any) =>
          (props.width === 96 || props.width === 192) &&
          `
          stroke-width: 6px;
      `}
        ${(props: any) =>
          props.width === 768 &&
          css`
            stroke-width: 16px;
          `}
      width: 212px;
      `,
    },
  };
};

export default generator;
