import { Button, ButtonProps } from '../Button';
import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { ExtendedTheme } from '../../themes/microfocus';

type IconButtonThemedProps = ButtonProps & ThemeProps<Pick<ExtendedTheme, 'paper'>>;

const StyledButton = styled<React.ComponentType<IconButtonThemedProps>>(Button)`
`;

export interface IconButtonProps extends ButtonProps {
}

const IconButton = (props: IconButtonProps) => (
  <StyledButton {...props} />
);

export default IconButton;
