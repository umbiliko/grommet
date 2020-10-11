import { css } from 'styled-components';
import { ButtonProps } from '../../../../components/Button';
import { backgroundColor, borderColor } from '../../../utils/css';
import pick from '../../../utils/pick';
import disabled from './disabled';
import { BaseButtonStyling } from './styling';

interface StyledButtonProps extends Omit<ButtonProps, 'color'> {
  colorValue?: string;
}

export const enabled = (
  { color, style: { active, focus, hover, ...style } }: any,
  props: StyledButtonProps,
) => css`
  color: ${pick(style.color)};
  ${props.colorValue || props.plain ? '' : backgroundColor(style)}
  ${props.colorValue || props.plain ? '' : borderColor(style)}
  box-shadow: ${pick(style.boxShadow)};

  &:focus {
    color: ${pick(focus.color)};
    ${props.colorValue || props.plain ? '' : backgroundColor(focus)}
    ${props.colorValue || props.plain ? '' : borderColor(focus)}
    box-shadow: ${pick(focus.boxShadow)};
  }

  &:hover {
    color: ${pick(hover.color)};
    ${props.colorValue || props.plain ? '' : backgroundColor(hover)}
    ${props.colorValue || props.plain ? '' : borderColor(hover)}
    box-shadow: ${pick(hover.boxShadow)};
    transition: ${style.transition};
  }

  &:active,
  &:focus:active {
    color: ${pick(active.color)};
    ${props.colorValue || props.plain ? '' : backgroundColor(active)}
    ${props.colorValue || props.plain ? '' : borderColor(active)}
    box-shadow: ${pick(active.boxShadow)};
  }

  &:disabled,
  &:focus:disabled {
    color: ${pick(active.color)};
    ${props.colorValue || props.plain ? '' : backgroundColor(disabled)}
    ${props.colorValue || props.plain ? '' : borderColor(disabled)}
    box-shadow: ${pick(active.boxShadow)};
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
