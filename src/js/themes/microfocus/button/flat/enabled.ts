import { css } from 'styled-components';
import { ButtonProps } from '../../../../components/Button';
import pick from '../../../utils/pick';
import { FlatButtonStyling } from './styling';

export const enabled = (
  { color, style: { active, focus, hover, ...style } }: any,
  props: ButtonProps,
) => css`
  color: ${pick(style.color)};
  background-color: ${pick(style.backgroundColor)};
  ${() =>
    style.borderColor
      ? css`
          border-color: ${pick(style.borderColor)};
        `
      : css``}

  &:focus {
    color: ${pick(focus.color)};
    background-color: ${pick(focus.backgroundColor)};
    box-shadow: ${pick(focus.boxShadow)};
    border-color: ${pick(focus.borderColor)};
  }

  &:hover {
    color: ${pick(hover.color)};
    background-color: ${pick(hover.backgroundColor)};
    box-shadow: ${pick(hover.boxShadow)};
    ${() =>
      hover.borderColor
        ? css`
            border-color: ${pick(hover.borderColor)};
          `
        : css``}
  }

  &:active,
  &:focus:active {
    color: ${pick(active.color)};
    background-color: ${pick(active.backgroundColor)};
  }

  &:focus,
  &:focus:active {
    outline: 0;
    transition: ${style.transition};
  }

  &:hover,
  &:focus:hover {
    box-shadow: ${pick(hover.boxShadow)};
  }

  &:focus:hover:active {
    box-shadow: ${pick(active.boxShadow)};
  }
`;

export default enabled;
