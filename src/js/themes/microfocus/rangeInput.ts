import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import sliderButton from '../quantum-ux/slider-button';
import sliderHandle from '../quantum-ux/slider-handle';
import sliderTrackOperated from '../quantum-ux/slider-track-operated';
import { backgroundColor, borderColor } from '../utils/css';
import pick from '../utils/pick';

export const rangeInput = {
  thumb: {
    background: {
      color: {
        dark: '#000',
        light: '#fff',
      },
    },
    border: {
      color: {
        dark: '#fff',
        light: '#000',
      },
    },
    borderWidth: '2px',
    borderRadius: sliderHandle.borderRadius,
    height: sliderHandle.baseSize,
    top: '7px',
    width: sliderHandle.baseSize,
    zIndex: 10,

    active: {
      background: {
        color: {
          dark: sliderTrackOperated.backgroundColorDark,
          light: sliderTrackOperated.backgroundColor,
        },
      },
      border: {
        color: {
          dark: sliderTrackOperated.backgroundColorDark,
          light: sliderTrackOperated.backgroundColor,
        },
      },
      boxShadow: 'none',
      height: sliderHandle.baseSizeHover,
      top: '6px',
      width: sliderHandle.baseSizeHover,
    },

    hover: {
      backgroundColor: {
        dark: '#000',
        light: '#fff',
      },
      borderColor: {
        dark: '#fff',
        light: '#000',
      },
      boxShadow: 'none',
      height: sliderHandle.baseSizeHover,
      top: '6px',
      width: sliderHandle.baseSizeHover,
    },
  },
  track: {
    borderBottomColor: '#dcdedf',
    borderBottomWidth: sliderButton.borderSize,
    color: sliderTrackOperated.backgroundColor,
    height: sliderTrackOperated.height,
  },
};

const extendThumb = css`
  height: ${rangeInput.thumb.height};
  width: ${rangeInput.thumb.width};
  border-radius: ${rangeInput.thumb.borderRadius};
  transition: ${sliderHandle.transition};
  border: ${rangeInput.thumb.borderWidth} solid
    ${backgroundColor(rangeInput.thumb)};
  background-color: ${backgroundColor(rangeInput.thumb)};
  top: ${rangeInput.thumb.top};
  z-index: ${rangeInput.thumb.zIndex};
  &:hover {
    height: ${sliderHandle.baseSizeHover};
    width: ${sliderHandle.baseSizeHover};
    top: ${rangeInput.thumb.hover.top};
    -webkit-box-shadow: ${rangeInput.thumb.hover.boxShadow};
    -moz-box-shadow: ${rangeInput.thumb.hover.boxShadow};
    box-shadow: ${rangeInput.thumb.hover.boxShadow};
    border: ${rangeInput.thumb.borderWidth} solid
      ${pick(rangeInput.thumb.hover.borderColor)};
    background-color: ${pick(rangeInput.thumb.hover.backgroundColor)};
  }
  &:active {
    height: ${rangeInput.thumb.active.height};
    width: ${rangeInput.thumb.active.width};
    top: ${rangeInput.thumb.active.top};
    box-shadow: ${rangeInput.thumb.active.boxShadow};
    border: ${rangeInput.thumb.borderWidth} solid
      ${borderColor(rangeInput.thumb.active)};
    background-color: ${backgroundColor(rangeInput.thumb.active)};
  }
`;

const extendTrack = css`
  border-bottom: ${rangeInput.track.borderBottomWidth} solid
    ${rangeInput.track.borderBottomColor};
  color: ${rangeInput.track.color};
  height: ${rangeInput.track.height};
`;

export type RangeInputTheme = typeof rangeInput;

const generator: PartialThemeGenerator<'rangeInput'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    rangeInput: {
      track: {
        ...rangeInput.track,
        extend: extendTrack,
      },
      thumb: {
        ...rangeInput.thumb,
        extend: extendThumb,
      },
    },
  };
};

export default generator;
