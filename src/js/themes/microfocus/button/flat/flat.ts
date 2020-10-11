import { css } from 'styled-components';
import pick from '../../../utils/pick';
import { FlatButtonStyling } from './styling';

const flat = ({ style }: FlatButtonStyling) => css`
  border-style: ${style.border.style};
  ${() =>
    style.border.color
      ? css`
          border-color: ${pick(style.border.color)};
        `
      : css``};
  font-size: ${style.fontSize};
  font-weight: ${style.fontWeight};
  padding-left: ${style.paddingLeft};
  padding-right: ${style.paddingRight};
  text-transform: ${style.textTransform};
`;

export default flat;
