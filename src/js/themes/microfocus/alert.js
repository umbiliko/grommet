import { ColorType } from 'hercules-theme/utils';
import { PartialThemeGenerator } from '.';
import _alert from '../quantum-ux/alert';
import _alertClose from '../quantum-ux/alert-close';
import _alertGeneral from '../quantum-ux/alert-general';
import _alertHeadline from '../quantum-ux/alert-headline';
import _alertIcon from '../quantum-ux/alert-icon';
import _alertIconDanger from '../quantum-ux/alert-icon-danger';
import _alertIconDangerDark from '../quantum-ux/alert-icon-danger-dark';
import _alertIconDangerInverse from '../quantum-ux/alert-icon-danger-inverse';
import _alertIconDangerInverseDark from '../quantum-ux/alert-icon-danger-inverse-dark';
import _alertIconInfo from '../quantum-ux/alert-icon-info';
import _alertIconInfoDark from '../quantum-ux/alert-icon-info-dark';
import _alertIconInfoInverse from '../quantum-ux/alert-icon-info-inverse';
import _alertIconInfoInverseDark from '../quantum-ux/alert-icon-info-inverse-dark';
import _alertIconSuccess from '../quantum-ux/alert-icon-success';
import _alertIconSuccessDark from '../quantum-ux/alert-icon-success-dark';
import _alertIconSuccessInverse from '../quantum-ux/alert-icon-success-inverse';
import _alertIconSuccessInverseDark from '../quantum-ux/alert-icon-success-inverse-dark';
import _alertIconWarning from '../quantum-ux/alert-icon-warning';
import _alertIconWarningDark from '../quantum-ux/alert-icon-warning-dark';
import _alertIconWarningInverse from '../quantum-ux/alert-icon-warning-inverse';
import _alertIconWarningInverseDark from '../quantum-ux/alert-icon-warning-inverse-dark';
import _alertInputMessage from '../quantum-ux/alert-input-message';
import _alertLink from '../quantum-ux/alert-link';
import _alertTooltip from '../quantum-ux/alert-tooltip';
import _alertTooltipArrow from '../quantum-ux/alert-tooltip-arrow';

export const alert = {
  border: _alert.border,
  borderRadius: _alert.borderRadius,
  color: {
    dark: _alert.colorDark,
    light: _alert.color,
  },
  fontSize: _alert.fontSize,
  fontWeight: _alert.fontWeight,
  marginTop: _alert.marginTop,
  marginBottom: _alert.marginBottom,
  minHeight: _alert.minHeight,
  offset: _alert.offset,
  padding: _alert.padding,
  paddingBottom: _alert.paddingBottom,
  paddingHorizontal: _alert.paddingHorizontal,
  paddingLeft: _alert.paddingLeft,
  paddingRight: _alert.paddingRight,
  paddingTop: _alert.paddingTop,
  paddingVertical: _alert.paddingVertical,
  textAlign: _alert.textAlign,
  textShadow: _alert.textShadow,
  width: _alert.width,

  close: {
    fontSize: _alertClose.fontSize,
    fontWeight: _alertClose.fontWeight,
    opacity: _alertClose.opacity,
    right: _alertClose.right,
    top: _alertClose.top,

    hover: {
      color: {
        dark: _alertClose.colorHoverDark,
        light: _alertClose.colorHover
      },
      opacity: _alertClose.opacityHover
    }
  },

  headline: {
    marginTop: _alertHeadline.marginTopLg,
  },

  icon: {
    height: _alertIcon.height,
    marginBottom: _alertIcon.marginBottom,
    marginLeft: _alertIcon.marginLeft,
    marginRight: _alertIcon.marginRight,
    marginTop: _alertIcon.marginTop,
    width: _alertIcon.width,
  },

  link: {
    opacity: _alertLink.opacity,
    textDecoration: _alertLink.textDecorationHover,

    hover: {
      opacity: _alertLink.opacityHover,
      textDecoration: _alertLink.textDecorationHover,
    },
  },

  message: {
    marginBottom: _alertInputMessage.marginBottom,
    marginTop: _alertInputMessage.marginTop,
  },

  tooltip: {
    arrow: _alertTooltipArrow,
  },
};

export type AlertTheme = Omit<Partial<typeof alert>, 'icon' | 'link' | 'tooltip'> & {
  background: {
    color?: ColorType;
  },
  depth?: string;
  icon?: Partial<typeof alert.icon> & {
    image?: ColorType;
  };
  linkColor?: ColorType;
  position?: string;
  positionBottom?: string;
  positionTop?: string;
  positionLeft?: string;
  positionRight?: string;
  tooltipBorderColor?: ColorType;
  zIndex?: string;
};

export const alertLarge: Partial<AlertTheme> = {
  fontSize: _alert.fontSizeLg,
  headline: {
    marginTop: _alertHeadline.marginTopLg,
  },
  icon: {
    marginBottom: _alertIcon.marginBottomLg,
    marginLeft: _alertIcon.marginLeftLg,
    marginRight: _alertIcon.marginRightLg,
    marginTop: _alertIcon.marginTopLg,
    width: _alertIcon.widthLg,
  },
  marginTop: _alert.marginTopLg,
  minHeight: _alert.minHeightLg,
  padding: _alert.paddingLg,
  paddingBottom: _alert.paddingBottomLg,
  paddingLeft: _alert.paddingLeftLg,
  paddingRight: _alert.paddingRightLg,
  paddingTop: _alert.paddingTopLg,
};

export const alertGeneral: Partial<AlertTheme> = {
  background: {
    color: {
      dark: _alertGeneral.backgroundColor,
      light: _alertGeneral.backgroundColor,
    },
  },
  color: {
    dark: _alertGeneral.color,
    light: _alertGeneral.color,
  },
  /*
  icons: {
    danger: _alert.iconGeneralDanger,
    info: _alert.iconGeneralInfo,
    warning: _alert.iconGeneralWarning
  },
  */
  width: _alertGeneral.width,
  position: _alertGeneral.position,
  positionTop: _alertGeneral.positionTop,
  positionLeft: _alertGeneral.positionLeft,
  positionRight: _alertGeneral.positionRight,
  marginTop: _alertGeneral.marginTop,
  paddingTop: _alertGeneral.paddingTop,
  paddingBottom: _alertGeneral.paddingBottom,
  paddingLeft: _alertGeneral.paddingLeft,
  paddingRight: _alertGeneral.paddingRight,
  zIndex: _alertGeneral.zIndex,
};

export const alertDanger: Partial<AlertTheme> = {
  background: {
    color: {
      dark: _alert.backgroundColorDangerDark,
      light: _alert.backgroundColorDanger,
    },
  },
  color: {
    dark: _alert.colorDangerDark,
    light: _alert.colorDanger,
  },
  icon: {
    image: {
      dark: _alertIconDangerDark,
      light: _alertIconDanger,
    },
  },
  linkColor: {
    dark: _alertLink.colorDangerDark,
    light: _alertLink.colorDanger,
  },
  tooltipBorderColor: {
    dark: _alertTooltip.borderColorErrorDark,
    light: _alertTooltip.borderColorError,
  },
};

export const alertError: Partial<AlertTheme> = {
  background: {
    color: {
      dark: _alert.backgroundColorErrorDark,
      light: _alert.backgroundColorError,
    },
  },
  color: {
    dark: _alert.colorErrorDark,
    light: _alert.colorError,
  },
  icon: {
    image: {
      dark: _alertIconDangerDark,
      light: _alertIconDanger,
    },
  },
  linkColor: {
    dark: _alertLink.colorDangerDark,
    light: _alertLink.colorDanger,
  },
  tooltipBorderColor: {
    dark: _alertTooltip.borderColorErrorDark,
    light: _alertTooltip.borderColorError,
  },
};

export const alertInfo: Partial<AlertTheme> = {
  background: {
    color: {
      dark: _alert.backgroundColorInfoDark,
      light: _alert.backgroundColorInfo,
    },
  },
  color: {
    dark: _alert.colorInfoDark,
    light: _alert.colorInfo,
  },
  icon: {
    image: {
      dark: _alertIconInfoDark,
      light: _alertIconInfo,
    },
  },
  linkColor: {
    dark: _alertLink.colorInfoDark,
    light: _alertLink.colorInfo,
  },
  tooltipBorderColor: {
    dark: _alertTooltip.borderColorInfoDark,
    light: _alertTooltip.borderColorInfo,
  },
};

export const alertSuccess: Partial<AlertTheme> = {
  background: {
    color: {
      dark: _alert.backgroundColorSuccessDark,
      light: _alert.backgroundColorSuccess,
    },
  },
  color: {
    dark: _alert.colorSuccessDark,
    light: _alert.colorSuccess,
  },
  icon: {
    image: {
      dark: _alertIconSuccessDark,
      light: _alertIconSuccess,
    },
  },
  linkColor: {
    dark: _alertLink.colorSuccessDark,
    light: _alertLink.colorSuccess,
  },
  tooltipBorderColor: {
    dark: _alertTooltip.borderColorSuccessDark,
    light: _alertTooltip.borderColorSuccess,
  },
};

export const alertWarning: Partial<AlertTheme> = {
  background: {
    color: {
      dark: _alert.backgroundColorWarningDark,
      light: _alert.backgroundColorWarning,
    },
  },
  color: {
    dark: _alert.colorWarningDark,
    light: _alert.colorWarning,
  },
  icon: {
    image: {
      dark: _alertIconWarningDark,
      light: _alertIconWarning,
    },
  },
  linkColor: {
    dark: _alertLink.colorWarningDark,
    light: _alertLink.colorWarning,
  },
  tooltipBorderColor: {
    dark: _alertTooltip.borderColorWarningDark,
    light: _alertTooltip.borderColorWarning,
  },
};

export const alertInverse: Partial<AlertTheme> = {
  marginBottom: _alert.marginBottomInverse,
  marginTop: _alert.marginTopInverse,
  minHeight: _alert.minHeightInverse,
  padding: _alert.paddingInverse,
  paddingBottom: _alert.paddingBottomInverse,
  paddingLeft: _alert.paddingLeftInverse,
  paddingRight: _alert.paddingRightInverse,
  paddingTop: _alert.paddingTopInverse,
};

export const alertInverseCrossInterface: Partial<AlertTheme> = {
  background: {
    color: {
      dark: _alert.backgroundColorCrossInterfaceInverseDark,
      light: _alert.backgroundColorCrossInterfaceInverse,
    },
  },
  color: {
    dark: _alert.colorCrossInterfaceInverseDark,
    light: _alert.colorCrossInterfaceInverse,
  },
};

export const alertInverseDanger: Partial<AlertTheme> = {
  background: {
    color: {
      dark: _alert.backgroundColorDangerInverseDark,
      light: _alert.backgroundColorDangerInverse,
    },
  },
  color: {
    dark: _alert.colorDangerInverseDark,
    light: _alert.colorDangerInverse,
  },
  icon: {
    image: {
      dark: _alertIconDangerInverseDark,
      light: _alertIconDangerInverse,
    },
  },
};

export const alertInverseError: Partial<AlertTheme> = {
  background: {
    color: {
      dark: _alert.backgroundColorInverseErrorDark,
      light: _alert.backgroundColorInverseError,
    },
  },
  color: {
    dark: _alert.colorInverseErrorDark,
    light: _alert.colorInverseError,
  },
};

export const alertInverseInfo: Partial<AlertTheme> = {
  background: {
    color: {
      dark: _alert.backgroundColorInfoInverseDark,
      light: _alert.backgroundColorInfoInverse,
    },
  },
  color: {
    dark: _alert.colorInfoInverseDark,
    light: _alert.colorInfoInverse,
  },
  icon: {
    image: {
      dark: _alertIconInfoInverseDark,
      light: _alertIconInfoInverse,
    },
  },
  tooltipBorderColor: {
    dark: _alertTooltip.borderColorInfoDark,
    light: _alertTooltip.borderColorInfo,
  },
};

export const alertInverseSuccess: Partial<AlertTheme> = {
  background: {
    color: {
      dark: _alert.backgroundColorSuccessInverseDark,
      light: _alert.backgroundColorSuccessInverse,
    },
  },
  color: {
    dark: _alert.colorSuccessInverseDark,
    light: _alert.colorSuccessInverse,
  },
  icon: {
    image: {
      dark: _alertIconSuccessInverseDark,
      light: _alertIconSuccessInverse,
    },
  },
};

export const alertInverseWarning: Partial<AlertTheme> = {
  background: {
    color: {
      dark: _alert.backgroundColorWarningInverseDark,
      light: _alert.backgroundColorWarningInverse,
    },
  },
  color: {
    dark: _alert.colorWarningInverseDark,
    light: _alert.colorWarningInverse,
  },
  icon: {
    image: {
      dark: _alertIconWarningInverseDark,
      light: _alertIconWarningInverse,
    },
  },
};

export const alertOverlay: Partial<AlertTheme> = {
  background: {
    color: {
      dark: _alert.backgroundColorOverlayDark,
      light: _alert.backgroundColorOverlay,
    },
  },
  padding: _alert.paddingOverlay,
  depth: _alert.depthOverlay,
  zIndex: _alert.zIndexOverlay,
};

const generator: PartialThemeGenerator<
  | 'alert'
  | 'alertDanger'
  | 'alertError'
  | 'alertGeneral'
  | 'alertInfo'
  | 'alertInverse'
  | 'alertInverseCrossInterface'
  | 'alertInverseDanger'
  | 'alertInverseError'
  | 'alertInverseInfo'
  | 'alertInverseSuccess'
  | 'alertInverseWarning'
  | 'alertLarge'
  | 'alertGeneral'
  | 'alertOverlay'
  | 'alertSuccess'
  | 'alertWarning'
> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    alert,
    alertError,
    alertDanger,
    alertGeneral,
    alertInfo,
    alertInverse,
    alertInverseCrossInterface,
    alertInverseDanger,
    alertInverseError,
    alertInverseInfo,
    alertInverseSuccess,
    alertInverseWarning,
    alertLarge,
    alertOverlay,
    alertSuccess,
    alertWarning
  };
};

export default generator;
