import { css } from 'styled-components';
import pick from './pick';

export const backgroundColor = style => style.background && css`
  background-color: ${pick(style.background.color)};
`;

export const borderColor = style => style.border && css`
  border-color: ${pick(style.border.color)};
`;

export const boxShadow = style => css`
  box-shadow: ${pick(style.boxShadow)};
`;

export const color = style => css`
  color: ${pick(style.color)};
`;
