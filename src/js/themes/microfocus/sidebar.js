import { PartialThemeGenerator } from '.';
import { deepMerge } from '../../utils';
import sideMenu from '../quantum-ux/side-menu';
import { normalize } from '../utils/pick';
import colors, { color } from './colors';
import { icon } from './icon';
import { navigationPills } from './navigationPills';
import { paper } from './paper';
import { text } from './text';

/** from @microfocus/hercules-ux SidebarTheme */
const sidebarHerculesUX = {
  button: {
    circular: {
      border: {
        color: '#627279',
      },
    },
  },
  colors: {
    background: '#203037',
    icon: 'rgba(255,255,255,0.7)',
    muted: 'rgba(255,255,255,0.3)',
    toggle: 'rgba(255,255,255,0.7)',
    darkest: colors.darkest,
    light: colors['light-1'],
    primary: colors.brand,
  },
  nav: {
    background: {
      color: '#203037',
    },
    fontWeight: 600,
    menu: {
      background: {
        color: '#2e3f47',
      }
    },
    active: {
      background: {
        color: '#1a4261',
      }
    },
    hover: {
      background: {
        color: '#1a4261',
      }
    },
    item: {
      active: {
        icon: {
          color: 'light-2',
        },
        primary: 'light-1',
      },
      gap: 'small',
      height: '32px',
      hover: {
        icon: {
          color: 'light-3',
        },
      },
      icon: {
        color: 'light-4',
        size: '16px',
      },
      indent: '20px',
      primary: 'light-3',
      secondary: 'light-4',
    },
  },
  sidebar: {
    button: {
      borderTop: '',
    },
  },
  font: {},
  active: {
    colors: {
      background: '#1a4261',
      highlight: colors.focus,
      icon: 'rgba(255,255,255,0.8)',
      toggle: 'rgba(255,255,255,0.8)',
    },
    font: {
      weight: 600,
    },
  },
  hover: {
    colors: {
      background: '#1a4261',
      highlight: colors.focus,
      icon: 'rgba(255,255,255,0.8)',
      toggle: 'rgba(255,255,255,0.8)',
    },
    font: {
      weight: 600,
    },
  },
  selected: {
    colors: {
      background: '#1a4261',
      highlight: colors.focus,
      icon: 'rgba(255,255,255,0.8)',
      toggle: 'rgba(255,255,255,0.8)',
    },
    font: {
      weight: 600,
    },
  },
};

type SidebarHerculesUX = typeof sidebarHerculesUX;

const sidebarQuantumUX = {
  boxShadow: normalize(paper.depth1.boxShadow),
  width: sideMenu.widthOpen,

  minimized: {
    width: sideMenu.widthMinimized,
  },

  button: {
    background: {
      color: normalize(color.light),
    },
    border: {
      color: normalize(color.neutral5),
    },
    icon: {
      stroke: normalize(color.darkest),
      height: icon.medium.height,
      width: icon.medium.width,
    },
  },

  listItem: {
    primaryIcon: {
      fill: normalize(color.neutral1),
      height: icon.medium.height,
      stroke: normalize(color.neutral1),
      width: icon.medium.width,
    },
    primaryText: {},
    secondaryIcon: {
      fill: normalize(color.neutral1),
      height: icon.medium.height,
      stroke: normalize(color.neutral1),
      width: icon.medium.width,
    },
    secondaryText: {},
  },

  menu: {
    cursor: 'pointer',
    height: navigationPills.large.height,
    fontSize: '15px',
    fontWeight: 400,
    padding: '20px 12px 20px 13px',

    hover: {
      background: {
        color: {
          dark: 'rgba(0,115,231,0.05)',
          light: 'rgba(0,115,231,0.05)',
        },
      },
      color: {
        dark: '#000',
        light: '#000',
      },
    },

    active: {
      border: {
        color: normalize(color.primary),
      },
      color: normalize(color.darkest),
      fontWeight: text.semiBold.fontWeight,
    },

    primaryIcon: {
      marginRight: '16px',
      active: {
        stroke: normalize(color.neutral1),
      },
      hover: {
        color: normalize(color.neutral1),
        fill: normalize(color.neutral1),
        stroke: normalize(color.neutral1),
      },
    },

    primaryText: {
      color: normalize(color.neutral1),
      cursor: 'pointer',
      fontSize: text.headline4.fontSize,
      lineHeight: navigationPills.lineHeight,
      textDecoration: 'none',

      active: {
        color: normalize(color.darkest),
        fontWeight: text.semiBold.fontWeight,
      },
    },

    secondaryIcon: {
      hover: {
        color: normalize(color.neutral1),
        fill: normalize(color.neutral1),
        stroke: normalize(color.neutral1),
      },
    },
  },
};

type SidebarQuantumUX = typeof sidebarQuantumUX;

export type SidebarTheme = SidebarHerculesUX & SidebarQuantumUX;

export const sidebar: SidebarTheme = deepMerge<any, any>(
  {},
  sidebarQuantumUX,
  sidebarHerculesUX,
);

const generator: PartialThemeGenerator<'sidebar'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    sidebar,
  };
};

export default generator;