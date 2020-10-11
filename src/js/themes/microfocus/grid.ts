import { css } from 'styled-components';
import { ExtendType, PartialThemeGenerator } from '.';
import { backgroundColor, borderColor } from '../utils/css';
import pick from '../utils/pick';
import { sidebar } from './sidebar';

export const grid = {};

export type GridTheme = typeof grid & {
  extend?: ExtendType;
};

const extend = css<{ sidebarGrid: boolean }>`
  ${(props: any) =>
    props.sidebarGrid &&
    css`
      box-shadow: ${pick(sidebar.boxShadow)};
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
        background-color: ${backgroundColor(sidebar.button)};
        z-index: 10;
        border-radius: 16px;
        border: solid 1px;
        border-color: ${borderColor(sidebar.button)};
        svg {
          stroke: ${pick(sidebar.button.icon.stroke)};
          height: ${sidebar.button.icon.height};
          width: ${sidebar.button.icon.width};
          padding: 6px 5px 5px 6px;
          polyline {
            stroke-width: 3;
          }
        }
      }

      &.expanded {
        max-width: ${sidebar.width};
        overflow: visible;
        .sidebar-button {
          left: 93%;
        }
      }

      &.collapsed {
        max-width: ${sidebar.minimized.width};
        .sidebar-button {
          left: 70%;
        }
      }

      .sidebar-content {
        overflow: visible;
        div > a > span > svg,
        div > a > svg {
          width: ${sidebar.listItem.primaryIcon.width};
          height: ${sidebar.listItem.primaryIcon.height};
          padding: 0px;
          fill: ${pick(sidebar.listItem.primaryIcon.fill)};
          stroke: ${pick(sidebar.listItem.primaryIcon.stroke)};
        }
        div > a > span > div {
          width: 0px;
        }
        .sidebar.menu > a {
          color: ${pick(sidebar.menu.primaryText.color)};
          text-decoration: none;
          cursor: ${sidebar.menu.cursor};
          font-size: 15px;
          font-weight: 400;
          padding: 20px 12px 20px 13px;
          height: ${sidebar.menu.height};

          border-width: 0 0 0 4px;
          border-style: solid;
          border-color: transparent;
          span > div {
            color: ${pick(sidebar.menu.primaryText.color)};
            cursor: ${sidebar.menu.primaryText.cursor};
            font-size: ${sidebar.menu.primaryText.fontSize};
            line-height: ${sidebar.menu.primaryText.lineHeight};
            text-decoration: ${sidebar.menu.primaryText.textDecoration};
          }
          svg {
            margin-right: ${sidebar.menu.primaryIcon.marginRight};
            &:hover {
              color: ${pick(sidebar.menu.primaryIcon.hover.color)};
              fill: ${pick(sidebar.menu.primaryIcon.hover.fill)};
              stroke: ${pick(sidebar.menu.primaryIcon.hover.stroke)};
            }
          }
          &:hover {
            background-color: ${backgroundColor(sidebar.menu.hover)};
            color: ${pick(sidebar.menu.hover.color)};
          }
          &.active {
            border-color: ${pick(sidebar.menu.active.borderColor)};
            color: ${pick(sidebar.menu.active.color)};
            font-weight: ${sidebar.menu.active.fontWeight};
            svg {
              stroke: ${pick(sidebar.menu.primaryIcon.active.stroke)};
            }
            span > div {
              font-weight: ${sidebar.menu.primaryText.active.fontWeight};
              color: ${pick(sidebar.menu.primaryText.active.color)};
            }
          }
        }
      }
    `}
`;

const generator: PartialThemeGenerator<'grid'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    grid: {
      ...grid,
      extend,
    },
  };
};

export default generator;
