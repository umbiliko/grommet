import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import _menu from '../quantum-ux/menu';
import { backgroundColor } from '../utils/css';
import pick from '../utils/pick';
import { color } from './colors';
import { text } from './text';

export const menu = {
  active: {
    background: {
      color: {
        dark: _menu.activeBackgroundColor,
        light: _menu.activeBackgroundColor,
      },
    },
  },
  hover: {
    background: {
      color: {
        dark: _menu.hoverBackgroundColor,
        light: _menu.hoverBackgroundColor,
      },
    },
  },
};

export type MenuTheme = typeof menu;

const generator: PartialThemeGenerator<'menu'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    menu: {
      extend: css`
        div > div > button {
          color: ${pick(text.primary.color)};
          font-weight: ${text.secondary.fontWeight};
          font-size: ${text.body.fontSize};
          text-transform: ${text.secondary.textTransform};
          text-align: left;
          :not(:disabled) {
            color: ${pick(text.primary.color)};
          }
          :not(:hover) {
            color: ${pick(text.primary.color)};
            font-size: ${text.body.fontSize};
            font-weight: ${text.secondary.fontWeight};
          }

          :hover {
            color: ${pick(text.primary.color)};
            background-color: ${backgroundColor(menu.hover)};
          }
          :active {
            color: ${pick(text.primary.color)};
            line-height: ${text.lineHeight};
            background-color: ${backgroundColor(menu.active)};
            font-size: ${text.body.fontSize};
            font-weight: ${text.secondary.fontWeight};
          }
          :active:visited {
            color: ${pick(text.primary.color)};
          }
          &:active,
          :focus,
          :hover {
            color: ${pick(text.primary.color)};
          }
        }
        div > button {
          color: ${pick(text.primary.color)};
          font-weight: ${text.bold.fontWeight};
          font-size: ${text.navigation.secondary.fontSize};
          line-height: ${text.lineHeight};
          text-transform: uppercase;
        }
        span {
          font-weight: ${text.bold.fontWeight};
          font-size: ${text.navigation.secondary.fontSize};
          line-height: ${text.lineHeight};
          text-transform: uppercase;
        }
        svg {
          fill: ${pick(color.darkest)};
          stroke: ${pick(color.darkest)};
        }
      `,
    },
  };
};

export default generator;
