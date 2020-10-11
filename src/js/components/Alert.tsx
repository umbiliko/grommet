import { Box, BoxProps } from './Box';
import { deepMerge } from 'hercules-theme/utils';
import React from 'react';
import styled, { css, ThemeProps } from 'styled-components';
import pick from '../themes/utils/pick';
import { ExtendedTheme } from '../themes/microfocus';

export interface AlertProps extends BoxProps {
  large?: boolean;
  overlay?: boolean;
  type: 'danger' | 'error' | 'info' | 'success' | 'warning';
  variant?: 'general' | 'inverse' | 'inverse-cross-interface';
}

type AlertThemedProps = AlertProps &
  ThemeProps<
    Pick<
      ExtendedTheme,
      | 'alert'
      | 'alertDanger'
      | 'alertError'
      | 'alertGeneral'
      | 'alertInfo'
      | 'alertInverse'
      | 'alertInverseCrossInterface'
      | 'alertInverseDanger'
      | 'alertInverseError'
      | 'alertInverseInfo'
      | 'alertInverseSuccess'
      | 'alertInverseWarning'
      | 'alertGeneral'
      | 'alertOverlay'
      | 'alertSuccess'
      | 'alertWarning'
    >
  >;

const BoxStyled = styled<React.ComponentType<AlertThemedProps>>(Box)`
  ${(props: any) => {
    const style = props.theme?.alert || {};
    const typeStyle = {
      danger: props.theme?.alertDanger,
      error: props.theme?.alertError,
      info: props.theme?.alertInfo,
      success: props.theme?.alertSuccess,
      warning: props.theme?.alertWarning,
    };
    const inverseTypeStyle = {
      danger: props.theme?.alertInverseDanger,
      error: props.theme?.alertInverseError,
      info: props.theme?.alertInverseInfo,
      success: props.theme?.alertInverseSuccess,
      warning: props.theme?.alertInverseWarning,
    };

    if (props.large) {
      deepMerge(style, props.theme?.alertLarge || {});
    }
    switch (props.variant) {
      case 'general':
        deepMerge(style, props.theme?.alertGeneral || {});
        deepMerge(style, typeStyle[props.type] || {});
        break;
      case 'inverse-cross-interface':
        deepMerge(style, props.theme?.alertInverse || {});
        deepMerge(style, inverseTypeStyle[props.type] || {});
        break;
      case 'inverse':
        deepMerge(style, props.theme?.alertInverse || {});
        deepMerge(style, inverseTypeStyle[props.type] || {});
        break;
      default:
        deepMerge(style, typeStyle[props.type] || {});
        break;
    }
    if (props.overlay) {
      deepMerge(style, props.theme?.alertOverlay || {});
    }

    return css`
      background-color: ${pick(style.backgroundColor)};
      border-radius: ${style.borderRadius};
      cursor: ${style.cursor};
      font-weight: ${style.fontWeight};
      margin-bottom: ${style.marginBottom};
      margin-top: ${style.marginTop};
      padding: 4px 8px;
      padding: ${style.padding};
      min-height: ${style.minHeight};

      &:focus {
        border-radius: ${style.borderRadius};
      }

      svg {
        margin-right: ${style.icon.marginRight};
      }

      span {
        padding-left: 5px;
      }
    `;
  }}
`;

const Alert = (props: AlertProps) => <BoxStyled {...props} />;

export default Alert;
