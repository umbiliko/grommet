import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import _table from '../quantum-ux/table';
import _tableCell from '../quantum-ux/table-cell';
import _tableHeader from '../quantum-ux/table-header';
import { backgroundColor } from '../utils/css';
import pick from '../utils/pick';
import { text } from './text';

export const table = {
  borderBottomColor: {
    dark: _table.borderBottomColorHeader,
    light: _table.borderBottomColorHeader,
  },
  borderBottomWidth: _table.borderBottom,
  borderStyle: _table.borderStyle,
};

export const tableCell = {
  hover: {
    background: {
      color: {
        dark: _tableCell.backgroundColorHoverDark,
        light: _tableCell.backgroundColorHover,
      },
    },
  },
  focus: {
    background: {
      color: {
        dark: _tableCell.backgroundColorFocusDark,
        light: _tableCell.backgroundColorFocus,
      },
    },
  },
};

export const tableHeader = {
  borderBottomColor: {
    dark: _table.borderBottomColorHeader,
    light: _table.borderBottomColorHeader,
  },
  fontWeight: _tableHeader.fontWeight,
};

export type TableTheme = typeof table;

const generator: PartialThemeGenerator<'table'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    table: {
      extend: css`
        letter-spacing: ${text.caption.letterSpacing};
        tr {
          border-bottom: ${table.borderBottomWidth} ${table.borderStyle}
            ${pick(table.borderBottomColor)};
        }
        thead > tr > th {
          font-weight: ${_tableHeader.fontWeight};
        }
        thead > tr > th > div {
          border-bottom: none;
        }
        tbody > tr {
          &:hover {
            background-color: ${backgroundColor(tableCell.hover)};
          }
          &:focus {
            background-color: ${backgroundColor(tableCell.focus)};
          }
        }
      `,
    },
  };
};

export default generator;
