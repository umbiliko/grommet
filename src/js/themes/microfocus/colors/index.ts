import { Colors } from '../../../themes/base';
import { ColorType } from '../../../utils';
import _color from '../../quantum-ux/color';
import { text } from '../text';
import { brand_blue_hex, brand_w3c_hex, fuchsia_hex, indigo_hex } from './base';

export const undefinedColor = {
  dark: indigo_hex,
  light: fuchsia_hex,
};

const tuplify = (prefix: string, arr: ColorType[]): [string, ColorType][] =>
  arr.map((val, index) => [`${prefix}-${index + 1}`, val]);

const objectify = (tuples: [string, ColorType][]): Record<string, ColorType> =>
  tuples.reduce((acc, [key, val]) => Object.assign(acc, { [key]: val }), {});

export const status = {
  critical: _color.critical,
  error: _color.error,
  warning: _color.warning,
  ok: _color.normal,
  unknown: _color.severityUnknown,
  disabled: _color.textDisabled,
};

export const color = {
  accent: {
    dark: _color.accentDark,
    darker: _color.accentDarker,
  },
  accent1: {
    dark: _color.accentDark,
    light: _color.accent1,
  },
  accent2: {
    dark: _color.accentDark,
    light: _color.accent2,
  },
  accent3: {
    dark: _color.accentDark,
    light: _color.accent3,
  },
  accent4: {
    dark: _color.accentDark,
    light: _color.accent4,
  },
  accent5: {
    dark: _color.accentDark,
    light: _color.accent5,
  },

  alternative1: _color.alternative1,
  alternative2: _color.alternative2,
  alternative3: _color.alternative3,
  alternative4: _color.alternative4,
  alternative5: _color.alternative5,
  alternative6: _color.alternative6,

  background: {
    dark: '#192124',
    light: '#F0F1F2',
  },
  dark: {
    dark: _color.darkDark,
    light: _color.dark,
  },
  darkest: {
    dark: _color.darkestDark,
    light: _color.darkest,
  },
  divider: {
    dark: _color.dividerDark,
    light: _color.divider,
  },

  brand: {
    dark: brand_w3c_hex,
    light: brand_blue_hex,
  },

  dropShadow: _color.dropShadowColor,
  focus: {
    dark: _color.focusDark,
    light: _color.focus,
  },

  greyShade05: _color.greyShade05,
  greyShade2: _color.greyShade2,
  greyShade1: _color.greyShade1,

  light: _color.light,

  lighten05: _color.lighten05,
  lighten1: _color.lighten1,
  lighten2: _color.lighten2,
  lighten4: _color.lighten4,
  lighten5: _color.lighten5,
  lighten6: _color.lighten6,
  lighten7: _color.lighten7,
  lighten8: _color.lighten8,
  lighten9: _color.lighten9,

  negative: {
    dark: _color.negativeDark,
    darker: _color.negativeDarker,
  },

  neutral1: _color.neutral1,
  neutral2: _color.neutral2,
  neutral3: _color.neutral3,
  neutral4: _color.neutral4,
  neutral5: _color.neutral5,

  positive: {
    dark: _color.positiveDark,
    darker: _color.positiveDarker,
  },
  primary: {
    dark: _color.primaryDark,
    darker: _color.primaryDarker,
    light: _color.primary,
  },
  primaryHover: {
    dark: _color.primaryHoverDark,
    light: _color.primaryHover,
  },
  primaryHoverSmall: {
    dark: _color.primaryHoverSmallDark,
    light: _color.primaryHoverSmall,
  },
  primarySelected: {
    dark: _color.primarySelectedDark,
    light: _color.primarySelected,
  },

  shade02: _color.shade02,
  shade05: _color.shade05,
  shade1: _color.shade1,
  shade2: _color.shade2,
  shade3: _color.shade3,
  shade4: _color.shade4,
  shade5: _color.shade5,
  shade6: _color.shade6,
  shade7: _color.shade7,
  shade8: _color.shade8,
  shade9: _color.shade9,

  status,

  textDisabled: text.disabled.color,
  textEmphasis: text.emphasis.color,
  textMuted: text.muted.color,
  textPrimary: text.primary.color,
  textSecondary: text.secondary.color,
};

export const accents = [
  color.alternative1,
  color.alternative2,
  color.alternative3,
  color.alternative4,
  color.alternative5,
  color.alternative6,
];

export const highlights = [
  _color.secondary1,
  _color.secondary2,
  _color.secondary3,
  _color.secondary4,
  _color.secondary5,
  _color.secondary6,
  _color.secondary7,
  _color.secondary8,
];

export const neutrals = [
  _color.neutral1,
  _color.neutral2,
  _color.neutral3,
  _color.neutral4,
  _color.neutral5,
];

export const shades = [
  _color.secondary9,
  _color.secondary10,
  _color.secondary11,
  _color.secondary12,
  _color.secondary13,
  _color.secondary14,
  _color.secondary15,
  _color.secondary16,
];

export const statusHighlights = [
  _color.secondary17,
  _color.secondary18,
  _color.secondary19,
  _color.secondary20,
];

export const statusShades = [
  _color.secondary21,
  _color.secondary22,
  _color.secondary23,
  _color.secondary24,
];

export const colors: Colors = {
  // active: rgba(221, 221, 221, 0.5),
  background: color.background,
  // black: '#000000',
  dark: color.dark,
  darkest: color.darkest,
  light: color.light,
  /*
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: rgba(0, 0, 0, 0.33),
  },
  */
  brand: color.brand,
  primary: color.brand,
  /*
  control: {
    dark: 'accent-1',
    light: 'brand',
  },
  */
  focus: color.focus,
  // placeholder: '#AAAAAA',
  // selected: 'brand',
  /*
  text: {
    dark: '#f8f8f8',
    light: '#444444',
  },
  */
  /*
  icon: {
    dark: '#f8f8f8',
    light: '#666666',
  },
  */
  // white: '#FFFFFF',

  ...objectify(tuplify('accent', accents)),
  ...objectify(tuplify('dark', [_color.darkest, _color.dark])),
  ...objectify(tuplify('light', [_color.light, _color.neutral5])),
  ...objectify(tuplify('neutral', neutrals)),
  ...objectify(tuplify('highlight', highlights)),
  ...objectify(tuplify('shade', shades)),
  ...objectify(tuplify('statushighlight', statusHighlights)),
  ...objectify(tuplify('statusshade', statusShades)),
  ...objectify(
    Object.entries(status).map(([key, val]) => [`status-${key}`, val]),
  ),
};

// export const accentColors = ['#6FFFB0', '#FD6FFF', '#81FCED', '#FFCA58'];
// export const neutralColors = ['#00873D', '#3D138D', '#00739D', '#A2423D'];

export type ExtendedColorsType = typeof colors & Record<string, ColorType>;

export default colors;
