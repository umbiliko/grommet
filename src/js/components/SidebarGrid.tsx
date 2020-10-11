import { Grid, GridProps } from './Grid';
import React from 'react';
import styled, { css, ThemeProps } from 'styled-components';
import pick from '../themes/utils/pick';
import { ExtendedTheme } from '../themes/microfocus';

export interface SidebarGridProps extends GridProps {
  children?: React.ReactNode | React.ReactNodeArray;
}

type SidebarGridThemedProps = SidebarGridProps &
  ThemeProps<Pick<ExtendedTheme, 'sidebar'>>;

const SidebarGrid = styled<React.ComponentType<SidebarGridThemedProps>>(Grid)`
  ${(props: any) => css`
    box-shadow: ${props.theme?.sidebar?.boxShadow};
    transition: 0.2s cubic-bezier(0.49, 1, 0.38, 0.98);
    overflow: visible;
    > :first-child {
      overflow: visible;
    }

    .sidebar-button {
      position: relative;
      width: 32px;
      top: 50%;
      left: 93%;
      background-color: ${pick(props.theme?.sidebarButton?.backgroundColor)};
      z-index: 10;
      border-radius: 16px;
      border: solid 1px;
      border-color: ${pick(props.theme?.sidebarButton?.borderColor)};
      svg {
        stroke: ${props.theme?.sidebarButtonIcon?.stroke};
        height: ${props.theme?.sidebarButtonIcon?.height};
        width: ${props.theme?.sidebarButtonIcon?.width};
        padding: 6px 5px 5px 6px;
        polyline {
          stroke-width: 3;
        }
      }
    }

    &.expanded {
      max-width: ${props.theme?.sidebar?.width};
      overflow: visible;
      .sidebar-button {
        left: 93%;
      }
    }

    &.collapsed {
      max-width: ${props.theme?.sidebar?.minimized.width};
      .sidebar-button {
        left: 70%;
      }
    }

    .sidebar-content {
      overflow: visible;
      div > a > span > svg,
      div > a > svg {
        height: ${props.theme?.sidebar.listItem.primaryIcon?.height};
        width: ${props.theme?.sidebar.listItem.primaryIcon?.width};
        padding: 0px;
        fill: ${props.theme?.sidebar.listItem.primaryIcon?.fill};
        stroke: ${props.theme?.sidebar.listItem.primaryIcon?.stroke};
      }
      div > a > span > div {
        width: 0px;
      }
      .sidebarMenu > a {
        cursor: ${props.theme?.sidebar?.menu?.cursor};
        font-size: ${props.theme?.sidebar?.menu?.fontSize};
        font-weight: ${props.theme?.sidebar?.menu?.fontWeight};
        padding: ${props.theme?.sidebar?.menu?.padding};
        height: ${props.theme?.sidebar?.menu?.height};

        border-width: 0 0 0 4px;
        border-style: solid;
        border-color: transparent;
        span > div {
          color: ${pick(props.theme?.sidebar?.menu?.primaryText?.color)};
          cursor: ${props.theme?.sidebar?.menu?.primaryText?.cursor};
          font-size: ${props.theme?.sidebar?.menu?.primaryText?.fontSize};
          line-height: ${props.theme?.sidebar?.menu?.primaryText?.lineHeight};
          text-decoration: ${props.theme?.sidebar?.menu?.primaryText?.textDecoration};
        }
        svg {
          margin-right: ${props.theme?.sidebar?.menu?.primaryIcon?.marginRight};
          &:hover {
            color: ${pick(props.theme?.sidebar?.menu?.primaryIcon?.hover?.color)};
            fill: ${pick(props.theme?.sidebar?.menu?.primaryIcon?.hover?.fill)};
            stroke: ${pick(props.theme?.sidebar?.menu?.primaryIcon?.hover?.stroke)};
          }
        }
        &:hover {
          background-color: ${pick(props.theme?.sidebarMenu?.hover?.backgroundColor)};
          color: ${pick(props.theme?.sidebarMenu?.hover?.color)};
        }
        &.active {
          border-color: ${pick(props.theme?.sidebarMenu?.active?.borderColor)};
          color: ${pick(props.theme?.sidebarMenu?.active?.color)};
          font-weight: ${props.theme?.sidebarMenu?.active?.fontWeight};
          svg {
            stroke: ${pick(props.theme?.sidebar?.menu?.primaryIcon?.active?.stroke)};
          }
          span > div {
            font-weight: ${props.theme?.sidebar?.menu?.primaryText?.active?.fontWeight};
            color: ${pick(props.theme?.sidebar?.menu?.primaryText?.active?.color)};
          }
        }
      }
    }
  `}
`;

export default SidebarGrid;
