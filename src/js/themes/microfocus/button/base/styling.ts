import { ButtonProps } from '../../../../components/Button';
import { css } from 'styled-components';
import accentStyle from './accent';
import active from './active';
import base from './button';
import criticalStyle from './critical';
import defaultStyle from './default';
import disabled from './disabled';
import enabled from './enabled';
import plainStyle from './plain';
import primaryStyle from './primary';
import secondaryStyle from './secondary';
import successStyle from './success';

export const ACCENT = 'accent';
export const CRITICAL = 'critical';
export const DEFAULT = 'default';
export const PRIMARY = 'primary';
export const SECONDARY = 'secondary';
export const SUCCESS = 'success';

export type Accent = typeof ACCENT;
export type Critical = typeof CRITICAL;
export type Default = typeof DEFAULT;
export type Primary = typeof PRIMARY;
export type Secondary = typeof SECONDARY;
export type Success = typeof SUCCESS;

export type ButtonColor =
  | Accent
  | Critical
  | Default
  | Primary
  | Secondary
  | Success;

export type BaseButtonStyling =
  | {
      color: Accent;
      style: typeof accentStyle;
    }
  | {
      color: Critical;
      style: typeof criticalStyle;
    }
  | {
      color: Default;
      style: typeof defaultStyle;
    }
  | {
      color: Primary;
      style: typeof primaryStyle;
    }
  | {
      color: Secondary;
      style: typeof secondaryStyle;
    }
  | {
      color: Success;
      style: typeof successStyle;
    };

export const baseStyling = ({ style }: BaseButtonStyling) => css`
  border-color: ${style.borderColor};
  border-style: solid;
  border-width: ${base.borderWidth};
  font-size: ${base.fontSize};
  font-weight: ${base.fontWeight};
  line-height: ${base.lineHeight};
  letter-spacing: ${base.letterSpacing};
  min-height: ${base.height};
  text-transform: ${base.textTransform};
`;

export const stylize = (styling: BaseButtonStyling, props: ButtonProps) => [
  baseStyling(styling),
  props.disabled
    ? disabled(styling, props)
    : props.active
    ? active(styling, props)
    : enabled(styling, props),
];

export const accentStyling = (props: ButtonProps) =>
  stylize({ color: ACCENT, style: accentStyle }, props);

export const criticalStyling = (props: ButtonProps) =>
  stylize({ color: CRITICAL, style: criticalStyle }, props);

export const defaultStyling = (props: ButtonProps) =>
  stylize({ color: DEFAULT, style: defaultStyle }, props);

export const plainStyling = (props: ButtonProps) =>
  stylize({ color: ACCENT, style: plainStyle }, props);

export const primaryStyling = (props: ButtonProps) =>
  stylize({ color: PRIMARY, style: primaryStyle }, props);

export const secondaryStyling = (props: ButtonProps) =>
  stylize({ color: SECONDARY, style: secondaryStyle }, props);

export const successStyling = (props: ButtonProps) =>
  stylize({ color: SUCCESS, style: successStyle }, props);
