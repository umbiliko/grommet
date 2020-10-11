import { ButtonProps } from '../../../../components/Button';
import { css } from 'styled-components';
import active from './active';
import _button from './button';
import criticalStyle from './critical';
import disabled from './disabled';
import enabled from './enabled';
import button from './button';
import successStyle from './success';
import { deepMerge } from 'hercules-theme/utils';

const accentStyle = deepMerge({ }, button, button.accent);
const defaultStyle = deepMerge({ }, button, button.default);
const plainStyle = button;
const primaryStyle = deepMerge({ }, button, button.primary);
const secondaryStyle = deepMerge({ }, button, button.secondary);

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
      style: any;
    }
  | {
      color: Critical;
      style: any;
    }
  | {
      color: Default;
      style: any;
    }
  | {
      color: Primary;
      style: any;
    }
  | {
      color: Secondary;
      style: any;
    }
  | {
      color: Success;
      style: any;
    };

export const baseStyling = ({ style }: BaseButtonStyling) => css`
  border-color: ${style.border.color};
  border-style: solid;
  border-width: ${_button.border.width};
  border-radius: ${_button.border.radius};
  font-size: ${_button.fontSize};
  font-weight: ${_button.fontWeight};
  line-height: ${_button.lineHeight};
  letter-spacing: ${_button.letterSpacing};
  min-height: ${_button.height};
  text-transform: ${_button.textTransform};
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
