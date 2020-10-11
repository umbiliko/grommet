import { PartialThemeGenerator } from '.';
import _breadcrumbs from '../quantum-ux/breadcrumbs';
import _breadcrumbsLinks from '../quantum-ux/breadcrumbs-links';
import _breadcrumbsLinksLastChild from '../quantum-ux/breadcrumbs-links-last-child';
import _breadcrumbsSeparation from '../quantum-ux/breadcrumbs-separation';
import _mastheadBreadcrumbsLinks from '../quantum-ux/masthead-breadcrumbs-links';

export const breadcrumbs = {
  backgroundColor: {
    dark: _breadcrumbs.backgroundColorDark,
    light: _breadcrumbs.backgroundColor,
  },
  borderRadius: _breadcrumbs.borderRadius,
  display: _breadcrumbs.display,
  fontSize: _breadcrumbs.fontSize,
  fontWeight: _breadcrumbs.fontWeight,
  lineHeight: _breadcrumbs.lineHeight,
  marginTop: _breadcrumbs.marginTop,
  marginBottom: _breadcrumbs.marginBottom,
  padding: _breadcrumbs.padding,

  focus: {
    borderRadius: _breadcrumbs.borderRadiusFocus,
  }
};

export const breadcrumbsLink = {
  backgroundColor: {
    dark: _breadcrumbsLinks.backgroundColorDark,
    light: _breadcrumbsLinks.backgroundColor,
  },
  color: {
    dark: _breadcrumbsLinks.colorDark,
    light: _breadcrumbsLinks.color,
  },
  cursor: _breadcrumbsLinks.cursor,
  textDecoration: _breadcrumbsLinks.textDecoration,
  textTransform: _breadcrumbsLinks.textTransform,

  active: {
    color: {
      dark: _breadcrumbsLinks.colorActiveDark,
      light: _breadcrumbsLinks.colorActive,
    },
    fontWeight: _breadcrumbsLinks.fontWeightActive,
    textDecoration: _breadcrumbsLinks.textDecorationActive,
  },
  focus: {
    color: {
      dark: _breadcrumbsLinks.colorFocusDark,
      light: _breadcrumbsLinks.colorFocus,
    },
    textDecoration: _breadcrumbsLinks.textDecorationFocus,
  },
  hover: {
    color: {
      dark: _breadcrumbsLinks.colorHoverDark,
      light: _breadcrumbsLinks.colorHover,
    },
    textDecoration: _breadcrumbsLinks.textDecorationHover,
  },
  last: {
    color: {
      dark: _breadcrumbsLinksLastChild.colorDark,
      light: _breadcrumbsLinksLastChild.color,
    },
  },
  master: {
    color: {
      dark: _mastheadBreadcrumbsLinks.colorDark,
      light: _mastheadBreadcrumbsLinks.color,
    },
    opacity: _mastheadBreadcrumbsLinks.opacity,
  },
};

export const breadcrumbsSeparation = {
  color: {
    dark: _breadcrumbsSeparation.colorDark,
    light: _breadcrumbsSeparation.color,
  },
  content: _breadcrumbsSeparation.content,
  fontFamily: _breadcrumbsSeparation.fontFamily,
  fontSize: _breadcrumbsSeparation.fontSize,
  fontWeight: _breadcrumbsSeparation.fontWeight,
  padding: _breadcrumbsSeparation.padding
}

export type BreadcrumbsTheme = typeof breadcrumbs;
export type BreadcrumbsLinkTheme = typeof breadcrumbsLink;
export type BreadcrumbsSeparationTheme = typeof breadcrumbsSeparation;

const generator: PartialThemeGenerator<'breadcrumbs' | 'breadcrumbsLink' | 'breadcrumbsSeparation'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    breadcrumbs,
    breadcrumbsLink,
    breadcrumbsSeparation,
  };
};

export default generator;
