import React from 'react';
import { icon } from '../themes/microfocus/icon';
import icons from '../themes/microfocus/icons';
import styled, { css } from 'styled-components';
import pick from '../themes/utils/pick';

export interface IconProps {
  active?: boolean;
  disabled?: boolean;
  children: string;
  size?: 10 | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge';
}

const Icon = styled.i<IconProps>`
  font-family: ${icon.fontFamily};
  font-weight: ${icon.fontWeight};
  letter-spacing: ${icon.letterSpacing};
  ${({ active, disabled, children, size }) => {
    const iconSet = icons[children];
    const { height, width } = size ? icon[size] : icon.medium;
    const data = size ? iconSet[size] : iconSet['medium'];
    const url = data.startsWith('url(') ? data : `url(${data})`;

    if (disabled) {
      return `
        color: ${pick(icon.disabled.color)};
        background-url: ${url};
      `;
    }

    if (active) {
      return `
        background-url: ${url};
        color: ${pick(icon.disabled.color)};
      `;
    }

    return `
      background-url: ${url};
      color: ${pick(icon.color)};
      height: ${height};
      width: ${width};
      &:focus {
        color: ${pick(icon.focus.color)};
      }
      &:hover {
        color: ${pick(icon.hover.color)};
      }
    `;
  }}
`;

export default Icon;