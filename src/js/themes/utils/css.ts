import { css } from 'styled-components';
import pick from './pick';

export const backgroundColor = style => css`
  background-color: ${pick(style.backgroundColor)};
`;

export const borderColor = style => css`
  border-color: ${pick(style.borderColor)};
`;

export const boxShadow = style => css`
  box-shadow: ${pick(style.boxShadow)};
`;

export const color = style => css`
  color: ${pick(style.color)};
`;
