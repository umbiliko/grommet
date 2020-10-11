import { css } from 'styled-components';
import pick from '../utils/pick';
import { PartialThemeGenerator } from '.';
import { tab } from './tab';
import { text } from './text';

export const tabs = {};

export type TabsTheme = typeof tabs;

const generator: PartialThemeGenerator<'tabs'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    tabs: {
      extend: css`
        button[aria-selected='false'] > div {
          font-weight: ${tab.fontWeight};
        }
        button > div {
          border: none;
        }
        button > div > span {
          color: ${pick(tab.color)};
          border-radius: ${tab.borderRadius};
          padding: 0 0 ${tab.paddingBottom} 0;
          font-size: 0.875rem;
          line-height: ${text.lineHeight};
          letter-spacing: ${text.letterSpacing};
        }
        button > div > span:after {
          content: '';
          display: block;
          margin: ${tab.margin};
          height: ${tab.borderBottomWidth};
          width: 0px;
          background: transparent;
          transition: ${tab.transition};
          -webkit-transition: ${tab.transition};
          margin-top: 5px;
        }
        button[aria-selected='true'] > div > span:after {
          width: ${tab.active.transitionWidth};
          background: ${pick(tab.active.color)};
          margin-top: 5px;
        }
      `,
    },
  };
};

export default generator;
