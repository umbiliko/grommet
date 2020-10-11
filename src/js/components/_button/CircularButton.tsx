import { Button, ButtonProps } from '../Button';
import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { ExtendedTheme } from '../../themes/microfocus';

type CircularButtonThemedProps = ButtonProps & ThemeProps<Pick<ExtendedTheme, 'paper'>>;

const StyledButton = styled<React.ComponentType<CircularButtonThemedProps>>(Button)`
`;

export interface CircularButtonProps extends ButtonProps {
}

const CircularButton = (props: CircularButtonProps) => (
  <StyledButton {...props} />
);

export default CircularButton;
