import { css } from 'styled-components';
import pick from '../../../utils/pick';
import { FlatButtonStyling } from './styling';

const flat = ({ style }: FlatButtonStyling) => css`
  border-style: ${style.borderStyle};
  ${() =>
    style.borderColor
      ? css`
          border-color: ${pick(style.borderColor)};
        `
      : css``};
  font-size: ${style.fontSize};
  font-weight: ${style.fontWeight};
  padding-left: ${style.paddingLeft};
  padding-right: ${style.paddingRight};
  text-transform: ${style.textTransform};
`;

export default flat;
