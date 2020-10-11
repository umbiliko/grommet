import { css } from 'styled-components';
import { ButtonProps } from '../../../../components/Button';
import { backgroundColor, borderColor } from '../../../utils/css';
import pick from '../../../utils/pick';
import { BaseButtonStyling } from './styling';

interface StyledButtonProps extends Omit<ButtonProps, 'color'> {
  colorValue?: string;
}

const disabled = (
  { style: { disabled } }: BaseButtonStyling,
  props: StyledButtonProps,
) => css`
  color: ${pick(disabled.color)};
  ${props.colorValue || props.plain ? '' : backgroundColor(disabled)}
  ${
    props.colorValue || props.plain || !disabled.borderColor
      ? ''
      : borderColor(disabled)
  }
  box-shadow: ${pick(disabled.boxShadow)};
`;

export default disabled;
