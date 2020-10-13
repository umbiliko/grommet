import _navigationPills from '../quantum-ux/navigation-pills';
import _navigationPillsCaret from '../quantum-ux/navigation-pills-caret';
import _navigationPillsContainer from '../quantum-ux/navigation-pills-container';
import _navigationPillsExpander from '../quantum-ux/navigation-pills-expander';
import _navigationPillsExpanderOffset from '../quantum-ux/navigation-pills-expander-offset';
import _navigationPillsHighlight from '../quantum-ux/navigation-pills-highlight';
import _navigationPillsMarginRight from '../quantum-ux/navigation-pills-margin-right';
import _navigationPillsTitle from '../quantum-ux/navigation-pills-title';

export const navigationPills = {
  color: {
    dark: _navigationPills.colorDark,
    light: _navigationPills.color,
  },

  borderRadius: Number(_navigationPills.borderRadius),
  borderSize: _navigationPills.borderSize,
  borderStyle: _navigationPills.borderStyle,
  border: {
    color: {
      dark: _navigationPills.borderColorDark,
      light: _navigationPills.borderColor,
    },
    style: _navigationPills.border,
  },
  fontSize: _navigationPills.fontSize,
  fontWeight: _navigationPills.fontWeight,

  height: _navigationPills.height,
  letterSpacing: _navigationPills.letterSpacing,
  lineHeight: _navigationPills.lineHeight,

  paddingBottom: _navigationPills.paddingBottom,
  paddingLeft: _navigationPills.paddingLeft,
  paddingRight: _navigationPills.paddingRight,
  paddingTop: _navigationPills.paddingTop,

  padding: _navigationPills.padding,
  marginBottom: _navigationPills.marginBottom,
  marginLeft: _navigationPills.marginLeft,
  // marginLeft: _navigationPillsMarginLeft,
  marginTop: _navigationPills.marginTop,
  marginRight: _navigationPillsMarginRight,
  textTransform: _navigationPills.textTransform,

  active: {
    background: {
      color: {
        dark: _navigationPills.backgroundColorActiveDark,
        light: _navigationPills.backgroundColorActive,
      },
    },
    boxShadow: {
      dark: _navigationPills.boxShadowActiveDark,
      light: _navigationPills.boxShadowActive,
    },
    color: {
      dark: _navigationPills.colorActiveDark,
      light: _navigationPills.colorActive,
    },
    fontWeight: _navigationPills.fontWeightActive,

    hover: {
      color: {
        dark: _navigationPills.colorHoverActiveDark,
        light: _navigationPills.colorHoverActive,
      },
    },

    focus: {
      color: {
        dark: _navigationPills.colorFocusActiveDark,
        light: _navigationPills.colorFocusActive,
      },
    },
  },

  disabled: {
    background: {
      color: {
        dark: _navigationPills.backgroundColorDisabledDark,
        light: _navigationPills.backgroundColorDisabled,
      },
    },
    border: {
      color: {
        dark: _navigationPills.borderColorDisabledDark,
        light: _navigationPills.borderColorDisabled,
      },
    },
    color: {
      dark: _navigationPills.colorDisabledDark,
      light: _navigationPills.colorDisabled,
    },
  },

  focus: {
    background: {
      color: {
        dark: _navigationPills.backgroundColorFocusDark,
        light: _navigationPills.backgroundColorFocus,
      },
    },
    border: {
      color: {
        dark: _navigationPills.borderColorFocusDark,
        light: _navigationPills.borderColorFocus,
      },
    },
    color: {
      dark: _navigationPills.colorFocusDark,
      light: _navigationPills.colorFocus,
    },
    outline: {
      color: {
        dark: _navigationPills.outlineColorFocus,
        light: _navigationPills.outlineColorFocus,
      },
    },
    textDecoration: _navigationPills.textDecorationFocus,
  },

  hover: {
    background: {
      color: {
        dark: _navigationPills.backgroundColorHoverDark,
        light: _navigationPills.backgroundColorHover,
      },
    },
    color: {
      dark: _navigationPills.colorHoverDark,
      light: _navigationPills.colorHover,
    },
    textDecoration: _navigationPills.textDecorationHover,
  },

  indent: {
    paddingLeft: _navigationPills.paddingLeftIndent,
  },

  large: {
    height: _navigationPills.heightLarge,
    paddingBottom: _navigationPills.paddingBottomLarge,
    paddingTop: _navigationPills.paddingTopLarge,
  },

  noCaret: {
    paddingLeft: _navigationPills.paddingLeftNoCaret,
  },

  navigationPillsIcon: {
    width: '16px',
    marginRight: '16px',
  },
};

export const navigationPillsCaret = {
  color: {
    dark: _navigationPillsCaret.colorDark,
    light: _navigationPillsCaret.color,
  },
  content: _navigationPillsCaret.content,
  display: _navigationPillsCaret.display,
  fontFamily: _navigationPillsCaret.fontFamily,
  fontSize: _navigationPillsCaret.fontSize,
  fontWeight: _navigationPillsCaret.fontWeight,
  transition: _navigationPillsCaret.transition,
  width: _navigationPillsCaret.width,
  height: _navigationPillsCaret.height,
  transformOrigin: _navigationPillsCaret.transformOrigin,

  active: {
    color: {
      dark: _navigationPillsCaret.colorActiveDark,
      light: _navigationPillsCaret.colorActive,
    },
    fontWeight: _navigationPillsCaret.fontWeightActive,
  },

  open: {
    content: _navigationPillsCaret.contentOpen,
    transform: _navigationPillsCaret.transformOpen,
  },

  subNav: {
    content: _navigationPillsCaret.contentSubNav,
    fontSize: _navigationPillsCaret.fontSizeSubNav,
    height: _navigationPillsCaret.heightSubNav,
    paddingTop: _navigationPillsCaret.paddingTopSubNav,
    width: _navigationPillsCaret.widthSubNav,
  },

  paddingRight: _navigationPillsCaret.paddingRight,
};

export const navigationPillsChild = {
  active: {
    background: {
      color: {
        dark: _navigationPills.backgroundColorChildActiveDark,
        light: _navigationPills.backgroundColorChildActive,
      },
    },
    color: {
      dark: _navigationPills.colorChildActiveDark,
      light: _navigationPills.colorChildActive,
    },
    fontWeight: _navigationPills.fontWeightChildActive,
  },
};

export const navigationPillsContainer = {
  background: {
    color: {
      dark: _navigationPillsContainer.backgroundColorDark,
      light: _navigationPillsContainer.backgroundColor,
    },
  },
  marginBottom: _navigationPillsContainer.marginBottom,
};

export const navigationPillsExpander = {
  marginLeft: _navigationPillsExpander.marginLeft,
  offset: _navigationPillsExpanderOffset,
  width: _navigationPillsExpander.width,
};

export const navigationPillsHighlight = {
  background: {
    color: {
      dark: _navigationPillsHighlight.backgroundColorDark,
      light: _navigationPillsHighlight.backgroundColor,
    },
  },
  content: _navigationPillsHighlight.content,
  display: _navigationPillsHighlight.display,
  height: _navigationPillsHighlight.height,
  position: _navigationPillsHighlight.position,
  top: _navigationPillsHighlight.top,
  width: _navigationPillsHighlight.width,

  transitionProperty: _navigationPillsHighlight.transitionProperty,
  transitionDuration: _navigationPillsHighlight.transitionDuration,
  transitionTimingFunction: _navigationPillsHighlight.transitionTimingFunction,

  active: {
    height: _navigationPillsHighlight.heightActive,
    top: _navigationPillsHighlight.topActive,
  },
};

export const navigationPillsSubNav = {
  fontSize: _navigationPills.fontSizeSubNav,
  fontWeight: _navigationPills.fontWeightSubNav,
  textTransform: _navigationPills.textTransformSubNav,
  letterSpacing: _navigationPills.letterSpacingSubNav,
  lineHeight: _navigationPills.lineHeightSubNav,
  height: _navigationPills.heightSubNav,
  opacity: _navigationPills.opacitySubNav,
  transform: _navigationPills.transformSubNav,
  transition: _navigationPills.transitionSubNav,
  paddingLeft: _navigationPills.paddingLeftSubNav,
  paddingLeft1: _navigationPills.paddingLeftSub1Nav,
  paddingLeft2: _navigationPills.paddingLeftSub2Nav,
  paddingLeft3: _navigationPills.paddingLeftSub3Nav,
  paddingLeft4: _navigationPills.paddingLeftSub4Nav,

  marginLeft: _navigationPills.marginLeftSubNav,
  marginLeft1: _navigationPills.marginLeftSub1Nav,
  marginLeft2: _navigationPills.marginLeftSub2Nav,
  marginLeft3: _navigationPills.marginLeftSub3Nav,
  marginLeft4: _navigationPills.marginLeftSub4Nav,

  paddingTop: _navigationPills.paddingTopSubNav,
  paddingBottom: _navigationPills.paddingBottomSubNav,
  paddingTop3: _navigationPills.paddingTopSub3Nav,
  paddingTop4: _navigationPills.paddingTopSub4Nav,

  icon: {
    paddingLeft: _navigationPills.paddingLeftSubNavIcon,
  },

  indent: {
    paddingLeft: _navigationPills.paddingLeftSubNavIndent,
    paddingLeft1: _navigationPills.paddingLeftSub1NavIndent,
    paddingLeft2: _navigationPills.paddingLeftSub2NavIndent,
    paddingLeft3: _navigationPills.paddingLeftSub3NavIndent,
    paddingLeft4: _navigationPills.paddingLeftSub4NavIndent,
  },

  hide: {
    height: _navigationPills.heightSubNavHide,
    opacity: _navigationPills.opacitySubNavHide,
    transform: _navigationPills.transformSubNavHide,
    transition: _navigationPills.transitionSubNavHide,
  },

  noCaret: {
    paddingLeft: _navigationPills.paddingLeftSubNavNoCaret,
  },
};

export const navigationPillsTitle = {
  color: {
    dark: _navigationPillsTitle.colorDark,
    light: _navigationPillsTitle.color,
  },
  marginLeft: _navigationPillsTitle.marginLeft,
};
