import { css } from 'styled-components';
import { ButtonProps } from '../../../../components/Button';
import pick from '../../../utils/pick';
import { FlatButtonStyling } from './styling';

const active = (
  { style: { active } }: FlatButtonStyling,
  props: ButtonProps,
) => css`
  color: ${pick(active.color)};
  background-color: ${pick(active.backgroundColor)};
  box-shadow: ${pick(active.boxShadow)};
`;

export default active;
