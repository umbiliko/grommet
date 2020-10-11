import { css } from 'styled-components';
import { ButtonProps } from '../../../../components/Button';
import { backgroundColor, borderColor } from '../../../utils/css';
import pick from '../../../utils/pick';
import { BaseButtonStyling } from './styling';

interface StyledButtonProps extends Omit<ButtonProps, 'color'> {
  colorValue?: string;
}

const active = (
  { style: { active, focus, hover, ...style } }: any,
  props: StyledButtonProps,
) => css`
  color: ${pick(active.color)};
  ${props.colorValue || props.plain ? '' : backgroundColor(active)}
  ${
    props.colorValue || props.plain || !active.borderColor
      ? ''
      : borderColor(active)
  }
  box-shadow: ${pick(active.boxShadow)};

  &:focus {
    color: ${pick(focus.color)};
    ${props.colorValue || props.plain ? '' : backgroundColor(focus)}
    ${
      props.colorValue || props.plain || !focus.borderColor
        ? ''
        : borderColor(focus)
    }
    box-shadow: ${pick(focus.boxShadow)};
  }

  &:hover {
    color: ${pick(hover.color)};
    ${props.colorValue || props.plain ? '' : backgroundColor(hover)}
    ${
      props.colorValue || props.plain || !hover.borderColor
        ? ''
        : borderColor(hover)
    }
    box-shadow: ${pick(hover.boxShadow)};
    transition: ${style.transition};
  }
`;

export default active;
