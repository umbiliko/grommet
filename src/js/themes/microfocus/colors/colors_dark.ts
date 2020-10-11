import { ExtendedColorsType } from '.';

const myLightColors = {
  'Hercules Page Background': '#F0F1F2',
};

const myDarkColors = {
  'Top Brand': '#0073e7',
  'Background Base Color': '#192124',
  'Widget Box Border Color': '#2e3f47',
  'Widget Box Color': '#ffffff',
  'Widget Box Opacity': '70%',
  'Search bar Base Color': '#3b4b52',
  'Search bar Splitter Line Color': '#5d6d76',
  'Progress bar Base Color': '#3454d',
  'Text Color light': '#ffffff',
  'Text Color normal': '#f1f2f3',
  'Text Color dark': '#dcdedf',
  'Chart Line Color': '#7a8187',
  'Chart Fill Color': '#2e3f47',
  'Chart Border Color': '#3b4b52',
  'Table Fill Color': '#203037',
  'Table Border Color': '#2e3f47',
  'Table Header Fill': '#2e3f47',
  'Table Line Color': '#4e5b60',
  'Table Odd Row Color': '#2e3f47',
  'Table Odd Row Border Color': '#3f4c52',
  'Icon Color': '#ffffff',
  'Icon Opacity': '#70%',
};

export const dark: Partial<ExtendedColorsType> = {
  primary: '', // ', // #0073e7,

  light: '', // white,
  // dark: '', // #323435,
  // darkest: '', // black,

  alternative1: '', // #c6179d,
  alternative2: '', // #7425ad,
  alternative3: '', // #231ca5,
  alternative4: '', // #1668c1,
  alternative5: '', // #29ceff,
  alternative6: '', // #2fd6c3,

  neutral1: '', // #656668,
  neutral2: '', // #bdbec0,
  neutral3: '', // #dcdedf,
  neutral4: myDarkColors['Background Base Color'], // #f1f2f3,
  neutral5: '', // #f5f7f8,

  accent1: '', // #1aac60,
  accent2: '', // #f48b34,
  accent3: '', // #c6179d,
  accent4: '', // #e5004c,
  accent5: '', // #fcdb1f,

  // highlights
  secondary1: '', // #3939c6,
  secondary2: '', // #00abf3,
  secondary3: '', // #43e4ff,
  secondary4: '', // #1ffbba,
  secondary5: '', // #75da4d,
  secondary6: '', // #ffce00,
  secondary7: '', // #eb23c2,
  secondary8: '', // #ba47e2,

  // shades
  secondary9: '', // #271782,
  secondary10: '', // #014272,
  secondary11: '', // #0b8eac,
  secondary12: '', // #00a989,
  secondary13: '', // #5bba36,
  secondary14: '', // #ffb000,
  secondary15: '', // #9b1e83,
  secondary16: '', // #5216ac,

  // status Highlights
  secondary17: '', // #ff454f,
  secondary18: '', // #ffb24d,
  secondary19: '', // #fde159,
  secondary20: '', // #33c180,

  // status Shades
  secondary21: '', // #b21646,
  secondary22: '', // #e57828,
  secondary23: '', // #ffc002,
  secondary24: '', // #118c4f,

  normal: '', // #1aac60,
  active: '', // #1aac60,
  warning: '', // #ffc002,
  major: '', // #f48b34,
  critical: '', // #e5004c,
  error: '', // #e5004c,
  info: '', // #00abf3,

  primaryHover: '', // rgba(0,115,231,0.05),
  primarySelected: '', // rgba(0,115,231,0.1),
  primaryHoverSmall: '', // rgba(0,115,231,0.15),
  primaryDarker: '', // #0a66c3,
  primaryDark: '', // #1f91ff,

  accentDarker: '', // #26218f,
  accentDark: '', // #292678,

  negativeDarker: '', // #ca0849,
  negativeDark: '', // #9d1543,

  positiveDarker: '', // #1e9a5a,
  positiveDark: '', // #247c4f,

  shade02: '', // rgba(50,52,53,0.02),
  shade05: '', // rgba(50,52,53,0.05),
  shade1: '', // rgba(50,52,53,0.1),
  shade2: '', // rgba(50,52,53,0.2),
  shade3: '', // rgba(50,52,53,0.3),
  shade4: '', // rgba(50,52,53,0.4),
  shade5: '', // rgba(50,52,53,0.5),
  shade6: '', // rgba(50,52,53,0.6),
  shade7: '', // rgba(50,52,53,0.7),
  shade8: '', // rgba(50,52,53,0.8),
  shade9: '', // rgba(50,52,53,0.9),

  greyShade05: '', // #f1f2f3,
  greyShade2: '', // #d6d6d7,
  greyShade1: '', // #ebebeb,

  lighten05: '', // rgba(255,255,255,0.05),
  lighten1: '', // rgba(255,255,255,0.1),
  lighten2: '', // rgba(255,255,255,0.2),
  lighten4: '', // rgba(255,255,255,0.4),
  lighten5: '', // rgba(255,255,255,0.5),
  lighten6: '', // rgba(255,255,255,0.6),
  lighten7: '', // rgba(255,255,255,0.7),
  lighten8: '', // rgba(255,255,255,0.8),
  lighten9: '', // rgba(255,255,255,0.9),

  textEmphasis: '', // black,
  textPrimary: '', // #323435,
  textSecondary: '', // rgba(0,0,0,0.56),
  textDisabled: '', // #cececf,
  textMuted: '', // #dcdedf,

  divider: '', // #dcdedf,

  severityNormal: '', // #1aac60,
  severityWarning: '', // #29ceff,
  severityMinor: '', // #fcdb1f,
  severityMajor: '', // #f48b34,
  severityCritical: '', // #e5004c,
  severityUnknown: '', // #c6179d,

  // focus: '', // #0073e7,

  suggestBackground: '', // rgba(0,115,231,0.1),

  dropShadowColor: '', // rgba(0,0,0,0.2),

  productFamilyCp: '', // #29ceff,
  productFamilyM: '', // #231ca5,
  productFamilyA: '', // #014272,
  productFamilyIt: '', // #00abf3,
  productFamilyC: '', // #1668c1,
  productFamilyS: '', // black,
  productFamilyD: '', // #29ceff,
  productFamilyBc: '', // #2fd6c3,
  productFamilyIg: '', // #00645a,
  productFamilyBd: '', // #75da4d,
  darkestDark: '', // #192124,
  darkDark: '', // #203037,

  primaryHoverDark: '', // rgba(0,115,231,0.1),
  primarySelectedDark: '', // rgba(0,115,231,0.2),
  primaryHoverSmallDark: '', // rgba(0,115,231,0.4),
  backgroundDark: '', // #203037,
  backgroundTheme1: '', // #203037,
  backgroundTheme2: '', // #203037,
  backgroundTheme3: '', // #203037,
  textEmphasisDark: '', // white,
  textPrimaryDark: '', // rgba(255,255,255,0.8),
  textSecondaryDark: '', // rgba(255,255,255,0.6),
  textDisabledDark: '', // #4d595f,
  textMutedDark: '', // rgba(255,255,255,0.2),
  dividerDark: '', // rgba(255,255,255,0.2),
  focusDark: '', // #1f91ff,
};

export default dark;
