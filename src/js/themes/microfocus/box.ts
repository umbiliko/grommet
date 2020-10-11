import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import { AlertProps } from '../../components/Alert';
import { BreadcrumbsProps } from '../../components/Breadcrumbs';
import { PaperProps } from '../../components/Paper';
import { alert } from './alert';
import { breadcrumbs, breadcrumbsSeparation } from './breadcrumbs';
import { icon } from './icon';
import { paper } from './paper';

export const box = {};

export type BoxTheme = typeof box;

const extend = css<ExtendedBoxType>`
${(props: any) =>
  props.shadow === 'depth1' &&
  css`
    box-shadow: ${paper.depth1.boxShadow};
  `}
${(props: any) =>
  props.shadow === 'depth2' &&
  css`
    box-shadow: ${paper.depth2.boxShadow};
  `}
${(props: any) =>
  props.breadcrumbsBox &&
  css`
    font-size: ${breadcrumbs.fontSize};
    background-color: ${breadcrumbs.background.color};
    border-radius: ${breadcrumbs.borderRadius};
    margin-bottom: ${breadcrumbs.marginBottom};
    padding: ${breadcrumbs.padding};

    > svg {
      height: ${icon.medium.height};
      width: ${icon.medium.width};
      margin: ${breadcrumbsSeparation.padding};
    }
  `}
${(props: any) =>
  props.notification &&
  css`
    min-height: ${alert.minHeight};
    padding: 4px 8px;
    svg {
      margin-right: ${alert.icon.marginRight};
    }
    span {
      padding-left: 5px;
    }
  `}
`;

export type ExtendedBoxType = AlertProps &
  BreadcrumbsProps &
  PaperProps & {
    breadcrumbsBox?: boolean;
    notification?: boolean;
  };

const generator: PartialThemeGenerator<'box'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    box: {
      ...box,
      extend,
    },
  };
};

export default generator;
