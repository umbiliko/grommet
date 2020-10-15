import { PartialThemeGenerator } from '.';
import navigationTabs from '../quantum-ux/navigation-tabs';
import text from '../quantum-ux/text';

export const tab = {
  color: {
    dark: navigationTabs.colorDark,
    light: navigationTabs.color,
  },
  border: {
    color: {
      dark: navigationTabs.borderColorDark,
      light: navigationTabs.borderColor,
    },
    radius: navigationTabs.borderRadius,
  },
  borderBottomWidth: navigationTabs.borderBottomWidth,
  fontWeight: navigationTabs.fontWeight,
  margin: navigationTabs.margin,
  paddingBottom: navigationTabs.paddingBottom,
  paddingLeft: navigationTabs.paddingLeft,
  paddingRight: navigationTabs.paddingRight,
  transition: navigationTabs.transition,

  active: {
    color: {
      dark: navigationTabs.colorActiveDark,
      light: navigationTabs.colorActive,
    },
    fontWeight: text.fontWeightSemiBold,
    transitionWidth: navigationTabs.transitionWidthActive,
  },

  hover: {
    color: {
      dark: navigationTabs.colorHoverDark,
      light: navigationTabs.colorHover,
    },
  },

  small: {
    borderBottomWidth: navigationTabs.borderBottomWidthSmall,
  },
};

export type TabTheme = typeof tab;

const generator: PartialThemeGenerator<'tab'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    tab: {
      color: tab.color,
      active: tab.active,
      hover: tab.hover,
    },
  };
};

export default generator;
