import { css } from 'styled-components';
import { ButtonProps } from '../../../../components/Button';
import pick from '../../../utils/pick';
import { FlatButtonStyling } from './styling';

const disabled = (
  { style: { disabled } }: FlatButtonStyling,
  props: ButtonProps,
) =>
  disabled
    ? css`
        color: ${pick(disabled.color)};
        background-color: ${pick(disabled.background.color)};
        box-shadow: ${pick(disabled.boxShadow)};
      `
    : css``;

export default disabled;
