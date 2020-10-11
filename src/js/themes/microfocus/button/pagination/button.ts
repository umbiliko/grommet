import buttonPagination from '../../../quantum-ux/button-pagination';

const button = {
  alignItems: buttonPagination.alignItems,
  backgroundColor: {
    dark: buttonPagination.backgroundColor,
    light: buttonPagination.backgroundColor,
  },
  display: buttonPagination.display,
  borderWidth: buttonPagination.borderWidth,
  borderLeftRightWidth: buttonPagination.borderWidthLeftRight,
  color: {
    dark: buttonPagination.color,
    light: buttonPagination.color,
  },
  fontFamily: buttonPagination.fontFamily,
  fontWeight: buttonPagination.fontWeight,
  fontWeightBold: buttonPagination.fontWeightBold,
  height: buttonPagination.height,
  margin: buttonPagination.margin,
  minWidth: buttonPagination.minWidth,
  outline: buttonPagination.outline,
  padding: buttonPagination.padding,

  active: {
    backgroundColor: {
      dark: buttonPagination.backgroundColorActive,
      light: buttonPagination.backgroundColorActive,
    },
    borderLeftRightColor: {
      dark: buttonPagination.borderLeftRightActive,
      light: buttonPagination.borderLeftRightActive,
    },
    boxShadow: {
      dark: buttonPagination.boxShadowActive,
      light: buttonPagination.boxShadowActive,
    },
    color: {
      dark: buttonPagination.colorActive,
      light: buttonPagination.colorActive,
    },
  },

  disabled: {
    backgroundColor: {
      dark: buttonPagination.backgroundColorDisabled,
      light: buttonPagination.backgroundColorDisabled,
    },
    color: {
      dark: buttonPagination.colorDisabled,
      light: buttonPagination.colorDisabled,
    },
  },

  hover: {
    backgroundColor: {
      dark: buttonPagination.backgroundColorHover,
      light: buttonPagination.backgroundColorHover,
    },
  },
};

export default button;
