import { PartialThemeGenerator } from '.';
import _paper from '../quantum-ux/paper';

export const paper = {
  depth0: {
    backgroundColor: {
      dark: _paper.backgroundColorDepth0Dark,
      light: _paper.backgroundColorDepth0,
    },
    boxShadow: {
      dark: _paper.boxShadowDepth0Dark,
      light: _paper.boxShadowDepth0,
    },
    hover: {},
    padding: _paper.paddingDepth0,
  },
  depth1: {
    backgroundColor: {
      dark: _paper.backgroundColorDepth1Dark,
      light: _paper.backgroundColorDepth1,
    },
    boxShadow: {
      dark: _paper.boxShadowDepth1Dark,
      light: _paper.boxShadowDepth1,
    },
    hover: {
      boxShadow: {
        light: _paper.boxShadowDepth1Hover,
        dark: _paper.boxShadowDepth1HoverDark,
      },
    },
    padding: _paper.paddingDepth1,
  },
  depth2: {
    backgroundColor: {
      dark: _paper.backgroundColorDepth2Dark,
      light: _paper.backgroundColorDepth2,
    },
    boxShadow: {
      dark: _paper.boxShadowDepth2Dark,
      light: _paper.boxShadowDepth2,
    },
    right: {
      boxShadow: {
        light: _paper.boxShadowDepth2Right,
        dark: _paper.boxShadowDepth2RightDark,
      },
    },
  },
  depth3: {
    backgroundColor: {
      dark: _paper.backgroundColorDepth2Dark,
      light: _paper.backgroundColorDepth2,
    },
    boxShadow: {
      dark: _paper.boxShadowDepth3Dark,
      light: _paper.boxShadowDepth3,
    },
  },
};

export type PaperTheme = typeof paper;

const generator: PartialThemeGenerator<'paper'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    paper,
  };
};

export default generator;
