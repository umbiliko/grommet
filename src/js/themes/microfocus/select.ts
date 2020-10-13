import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import dropdownListItem from '../quantum-ux/dropdown-list-item';
import { backgroundColor } from '../utils/css';
import pick from '../utils/pick';

export const select = {
  drop: {
    background: {
      color: {
        dark: dropdownListItem.backgroundColorDark,
        light: dropdownListItem.backgroundColor,
      },
    },
    color: {
      dark: dropdownListItem.fontColorHoverDark,
      light: dropdownListItem.fontColorHover,
    },

    hover: {
      background: {
        color: {
          dark: dropdownListItem.backgroundColorHoverDark,
          light: dropdownListItem.backgroundColorHover,
        },
      },
      color: {
        dark: dropdownListItem.fontColorHoverDark,
        light: dropdownListItem.fontColorHover,
      },
    },
  },

  button: {
    background: {
      color: {
        dark: 'black',
        light: 'white',
      },
    },
    borderRadius: 0,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.375,
    padding: '6px 24px',
    textTransform: 'none',

    hover: {
      background: {
        color: {
          dark: dropdownListItem.backgroundColorHoverDark,
          light: dropdownListItem.backgroundColorHover,
        },
      },
      color: {
        dark: dropdownListItem.fontColorHoverDark,
        light: dropdownListItem.fontColorHover,
      },
    },
    primary: {
      background: {
        color: {
          dark: dropdownListItem.backgroundColorHoverDark,
          light: dropdownListItem.backgroundColorHover,
        },
      },
      color: {
        dark: dropdownListItem.fontColorHoverDark,
        light: dropdownListItem.fontColorHover,
      },
    },
    value: {
      background: {
        color: {
          dark: dropdownListItem.backgroundColorHoverDark,
          light: dropdownListItem.backgroundColorHover,
        },
      },
      color: {
        dark: dropdownListItem.fontColorHoverDark,
        light: dropdownListItem.fontColorHover,
      },
    },
  },
};

export type SelectTheme = typeof select;

const buttonStyle = css`
  background-color: ${backgroundColor(select.button)};
  text-transform: ${select.button.textTransform};
  > div {
    padding: 0;
  }
  input {
    border-radius: ${select.button.borderRadius};
  }
  div > span {
    font-size: ${select.button.fontSize};
    font-weight: ${select.button.fontWeight};
    line-height: ${select.button.lineHeight};
    padding: ${select.button.padding};
  }
`;

const buttonHoverStyle = css`
  &:hover,
  &:active {
    background-color: ${backgroundColor(select.button.primary)};
    color: ${pick(select.button.primary.color)};
  }
`;

const buttonPrimaryStyle = css`
  background-color: ${backgroundColor(select.button.primary)};
  color: ${pick(select.button.primary.color)};
`;

const buttonValueStyle = css`
  > div {
    &:hover,
    &:active {
      background-color: ${backgroundColor(select.button.value)};
      color: ${pick(select.button.value.color)};
    }
  }
`;

const dropStyle = css`
  &:hover,
  &:active {
    background-color: ${backgroundColor(select.drop.hover)};
    color: ${pick(select.drop.hover.color)};
  }
`;

const extendContainer = css<any>`
  ${(props: any) => props.drop && dropStyle}
  button {
    ${buttonStyle}
    ${(props: any) => props.primary && buttonPrimaryStyle}
    ${buttonHoverStyle}
    ${(props: any) => props.value && buttonValueStyle}
  }
`;

const generator: PartialThemeGenerator<'select'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    select: {
      searchplaceholder: 'search',
      container: {
        extend: extendContainer,
      },
    },
  };
};

export default generator;
