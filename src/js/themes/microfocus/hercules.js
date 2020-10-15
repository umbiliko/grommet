import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import color from '../quantum-ux/color';
import masthead from '../quantum-ux/masthead';
import mastheadBorderBottomStyle from '../quantum-ux/masthead-border-bottom-style';
import mastheadButton from '../quantum-ux/masthead-button';
import mastheadColor from '../quantum-ux/masthead-color';
import mastheadIcon from '../quantum-ux/masthead-icon';
import mastheadJustifyContent from '../quantum-ux/masthead-justify-content';
import mastheadMarginBottom from '../quantum-ux/masthead-margin-bottom';
import mastheadMarginLeft from '../quantum-ux/masthead-margin-left';
import mastheadMarginRight from '../quantum-ux/masthead-margin-right';
import mastheadMarginTop from '../quantum-ux/masthead-margin-top';
import mastheadNavigationItem from '../quantum-ux/masthead-navigation-item';
import mastheadPaddingLeft from '../quantum-ux/masthead-padding-left';
import mastheadTextDecoration from '../quantum-ux/masthead-text-decoration';
import mastheadTextTransform from '../quantum-ux/masthead-text-transform';
import scrollbar from '../quantum-ux/scrollbar';
import scrollbarRail from '../quantum-ux/scrollbar-rail';
import scrollbarThumb from '../quantum-ux/scrollbar-thumb';
import text from '../quantum-ux/text';
import tooltip from '../quantum-ux/tooltip';
import tooltipArrow from '../quantum-ux/tooltip-arrow';

export const hercules = {
  extend: css`
    ::-webkit-scrollbar {
      height: ${scrollbar.height};
      width: ${scrollbar.width};
      transition: ${scrollbar.transition};
    }
    ::-webkit-scrollbar-thumb {
      background: ${scrollbarThumb.color};
      radius: ${scrollbarThumb.radius};
      border: ${scrollbarThumb.border};
      background-clip: content-box;
    }
    ::-webkit-scrollbar-track {
      background-color: ${scrollbarRail.color};
    }
    button[aria-label='Open Menu'] {
      span {
        font-weight: ${text.fontWeightBold};
        font-size: ${text.navigationSecondaryFontSize};
        line-height: ${text.lineHeight};
        text-transform: uppercase;
      }
    }
    .quantum-ux_tooltip {
      white-space: nowrap;
      min-width: 100px;
      max-width: ${tooltip.maxWidth};
      padding: ${tooltip.padding};
      border: ${tooltip.border};
      color: ${tooltip.color};
      z-index: 1;
      text-align: center;
      border-radius: 0px;
      font-size: ${tooltip.fontSize};
      font-weight: ${text.fontWeight};
      white-space: pre-line;
      word-break: break-all;
      background-color: ${tooltip.backgroundColor};
      &.place-right {
        &:before {
          border-right: ${tooltipArrow.size} solid ${color.neutral3};
        }
        &:after {
          border-right-color: ${tooltip.backgroundColor};
        }
      }
      &.place-top {
        &:before {
          border-top: ${tooltipArrow.size} solid ${color.neutral3};
        }
        &:after {
          border-top-color: ${tooltip.backgroundColor};
        }
      }
      &.place-bottom {
        &:before {
          border-bottom: ${tooltipArrow.size} solid ${color.neutral3};
        }
        &:after {
          border-bottom-color: ${tooltip.backgroundColor};
        }
      }
      &.place-left {
        &:before {
          border-left: ${tooltipArrow.size} solid ${color.neutral3};
        }
        &:after {
          border-left-color: ${tooltip.backgroundColor};
        }
      }
    }
    header {
      &.masthead {
        background-color: ${color.primary};
        min-height: ${masthead.height};
        padding-left: ${mastheadPaddingLeft};
        padding-right: ${masthead.paddingRight};
        font-weight: ${text.fontWeightBold};
        font-size: ${text.fontSizeLarge};

        > :first-child {
          width: ${masthead.height};
          height: ${masthead.height};
          background-color: ${color.secondary2};
          color: ${mastheadIcon.color};
          justify-content: ${mastheadJustifyContent};
          margin-right: ${mastheadMarginRight};
          text-align: center;
        }

        a {
          color: ${mastheadColor};
          text-transform: ${mastheadTextTransform};
          text-decoration: ${mastheadTextDecoration};
          font-size: ${text.headline3FontSize};
          line-height: ${text.headline3FontSize};
          letter-spacing: ${text.headline3LetterSpacing};
          color: ${mastheadButton.color};
          font-weight: ${text.fontWeightMedium};
          margin-left: ${mastheadMarginLeft};
          margin-right: ${mastheadMarginRight};
          margin-top: ${mastheadMarginTop};

          &:after {
            background-color: ${color.light};
          }

          &.active {
            border-bottom-style: ${mastheadBorderBottomStyle};
            border-bottom-width: ${mastheadNavigationItem.borderBottomWidthActive};
            border-bottom-color: ${mastheadButton.color};
            margin-bottom: ${mastheadMarginBottom};
            transform: scaleX(1);
            font-weight: ${text.fontWeightBold};
          }
        }
      }
    }
  `,
};

export type HerculesTheme = typeof hercules;

const generator: PartialThemeGenerator<'hercules'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    hercules,
  };
};

export default generator;
