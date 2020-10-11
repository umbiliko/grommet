import { Box, BoxProps } from './Box';
import { ThemeContext } from '../contexts';
import { ElevationType } from 'hercules-theme/utils';
import React, { useMemo } from 'react';
import styled, { css, ThemeProps } from 'styled-components';
import { ExtendedTheme } from '../themes/microfocus';

export interface PaperProps extends BoxProps {
  elevation: any;
  shadow?: ElevationType | 'depth1' | 'depth2';
}

type PaperThemedProps = PaperProps & ThemeProps<Pick<ExtendedTheme, 'paper'>>;

const BoxStyled = styled<React.ComponentType<PaperThemedProps>>(Box)`
  ${(props: any) => {
    switch (props.shadow) {
      case 'depth1':
        break;
      case 'depth2':
        break;
    }
    return css``;
  }}
`;

const Paper = (props: PaperProps) => {
  const { shadow, ...spread } = props;
  switch (shadow) {
    case 'depth1':
      spread.elevation = 'medium';
      break;
    case 'depth2':
      spread.elevation = 'large';
      break;
  }
  return <BoxStyled {...spread} />;
};

export default Paper;
