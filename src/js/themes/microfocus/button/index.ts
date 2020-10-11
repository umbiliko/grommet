import { css } from 'styled-components';
import { PartialThemeGenerator } from '..';
import { ButtonProps } from '../../../components/Button';
import pick from '../../utils/pick';
import buttonStyle from './base/button';
import { defaultStyling, primaryStyling, secondaryStyling } from './base/styling';
export { default as buttonDivider } from '../../quantum-ux/button-divider';
export { default as _button } from './base/button';

const extend = css<ButtonProps>`
  box-shadow: ${pick(buttonStyle.boxShadow)};
  letter-spacing: ${buttonStyle.letterSpacing};
  line-height: ${buttonStyle.lineHeight};
  font-size: ${buttonStyle.fontSize};
  font-weight: ${buttonStyle.fontWeight};
  min-height: ${buttonStyle.height};
  text-transform: ${buttonStyle.textTransform};

  ${(props: any) => !props.primary && !props.secondary && !props.plain && defaultStyling(props)}
  ${(props: any) => props.primary && !props.plain && primaryStyling(props)}
  ${(props: any) => props.secondary && !props.plain && secondaryStyling(props)}
`;

export type ButtonTheme = typeof buttonStyle;

const generator: PartialThemeGenerator<'button'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    button : {
      ...buttonStyle,
      // extend,
    }
  };
};

export default generator;
