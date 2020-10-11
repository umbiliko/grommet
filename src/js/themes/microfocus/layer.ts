import { rgba } from 'polished';
import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import color from '../quantum-ux/color';
import layerOverlayBackgroundColor from '../quantum-ux/layer-overlay-background-color';
import navigationTabs from '../quantum-ux/navigation-tabs';

const layer: PartialThemeGenerator<'layer'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    layer: {
      background: {
        dark: color.dark,
        light: color.light
      },
      overlay: {
        background: {
          dark: rgba(48, 48, 48, 0.5),
          light: layerOverlayBackgroundColor,
        },
      },
      extend: css`
        > div:nth-child(2) {
          border: none;
          border-radius: 0px;
          box-shadow: 4px 4px 4px 8px rgba(0, 0, 0, 0.15);
          font-weight: ${navigationTabs.fontWeight};
        }
      `,
    },
  };
};

export default layer;
