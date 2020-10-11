import { Anchor, AnchorProps } from './Anchor';
import React from 'react';
import styled, { css, ThemeProps } from 'styled-components';
import pick from '../themes/utils/pick';
import { ExtendedTheme } from '../themes/microfocus';

export interface BreadcrumbsLinkProps extends AnchorProps {
  active?: boolean;
  children?: React.ReactNode | React.ReactNodeArray;
  variant?: 'last' | 'master';
}

type BreadcrumbsLinkThemedProps =  BreadcrumbsLinkProps & ThemeProps<Pick<ExtendedTheme, 'breadcrumbsLink'>>;

const AnchorStyled = styled<React.ComponentType<BreadcrumbsLinkThemedProps>>(Anchor)`
  ${(props: any) => {
    if (props.active) {
      return css`
        color: ${props.theme?.backgroundLinks?.active?.color};
        text-decoration: ${props.theme?.backgroundLinks?.active?.textDecoration};
        font-weight: ${props.theme?.backgroundLinks?.active?.fontWeight};
        background-color: ${props.theme?.backgroundLinks?.backgroundColor};
        &:hover {
          color: ${props.theme?.backgroundLinks?.active?.color};
          text-decoration: ${props.theme?.backgroundLinks?.active?.textDecoration};
          font-weight: ${props.theme?.backgroundLinks?.active?.fontWeight};
        }
      `;
    }
    let color: string;
    switch (props.variant) {
      case 'last':
        color = pick(props.theme?.backgroundLinks?.last?.color)(props);
        break;
      case 'master':
        color = pick(props.theme?.backgroundLinks?.master?.color)(props);
        break;
      default:
        color = pick(props.theme?.backgroundLinks?.color)(props);
        break;
    }
    return css`
      background-color: ${pick(props.theme?.breadcrumbsLinks?.backgroundColor)};
      color: ${color};
      cursor: ${props.theme?.backgroundLinks?.cursor};
      font-weight: ${props.theme?.backgroundLinks?.fontWeight};

      &:focus {
        color: ${pick(props.theme?.backgroundLinks?.focus?.color)};
        text-decoration: ${props.theme?.backgroundLinks?.focus?.textDecoration};
      }

      &:hover {
        color: ${props.theme?.backgroundLinks?.hover?.color};
        text-decoration: ${props.theme?.backgroundLinks?.hover?.textDecoration};
      }

      &:active {
        color: ${props.theme?.backgroundLinks?.active?.color};
        text-decoration: ${props.theme?.backgroundLinks?.active?.textDecoration};
        font-weight: ${props.theme?.backgroundLinks?.active?.fontWeight};
        background-color: ${props.theme?.backgroundLinks?.backgroundColor};
      }
    `;
  }}
  ${(props: any) => props.variant === 'master' && css`
    opacity: ${pick(props.theme?.backgroundLinks?.master?.opacity)};
  `}
`;

const BreadcrumbsLink = (props: BreadcrumbsLinkProps) => (<AnchorStyled {...props} />);

export default BreadcrumbsLink;