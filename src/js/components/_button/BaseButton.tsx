import { Button, ButtonProps } from '../Button';
import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { ExtendedTheme } from '../../themes/microfocus';
import {
  ACCENT,
  accentStyling,
  ButtonColor,
  CRITICAL,
  criticalStyling,
  DEFAULT,
  defaultStyling,
  PRIMARY,
  primaryStyling,
  SECONDARY,
  secondaryStyling,
  SUCCESS,
  successStyling,
} from '../../themes/microfocus/button/base/styling';

type ButtonThemedProps = ButtonProps & ThemeProps<Pick<ExtendedTheme, 'button'>>;

const StyledAccentButton = styled<React.ComponentType<ButtonThemedProps>>(Button)`
  ${(props: any) => accentStyling(props)}
`;

const StyledCriticalButton = styled<React.ComponentType<ButtonThemedProps>>(Button)`
  ${(props: any) => criticalStyling(props)}
`;

const StyledDefaultButton = styled<React.ComponentType<ButtonThemedProps>>(Button)`
  ${(props: any) => defaultStyling(props)}
`;

const StyledPrimaryButton = styled<React.ComponentType<ButtonThemedProps>>(Button)`
  ${(props: any) => primaryStyling(props)}
`;

const StyledSecondaryButton = styled<React.ComponentType<ButtonThemedProps>>(Button)`
  ${(props: any) => secondaryStyling(props)}
`;

const StyledSuccessButton = styled<React.ComponentType<ButtonThemedProps>>(Button)`
  ${(props: any) => successStyling(props)}
`;

export interface BaseButtonProps extends ButtonProps {
  color?: ButtonColor;
}

const BaseButton = React.memo(
  ({ color: variant, ...props }: BaseButtonProps): JSX.Element => {
    switch (variant) {
      case ACCENT:
        return <StyledAccentButton {...props} />;
      case CRITICAL:
        return <StyledCriticalButton {...props} />;
      case PRIMARY:
        return <StyledPrimaryButton {...props} />;
      case SECONDARY:
        return <StyledSecondaryButton {...props} />;
      case SUCCESS:
        return <StyledSuccessButton {...props} />;
      case DEFAULT:
      default:
        return <StyledDefaultButton {...props} />;
    }
  }
);

export default BaseButton;
