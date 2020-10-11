import { deepMerge } from 'hercules-theme/utils';
import { ButtonProps } from '../../../../components/Button';
import {
  ACCENT,
  ButtonColor,
  CRITICAL,
  DEFAULT,
  PRIMARY,
  SECONDARY,
  SUCCESS
} from '../base/styling';
import accentStyle from './accent';
import active from './active';
import criticalStyle from './critical';
import disabled from './disabled';
import enabled from './enabled';
import flat from './flat';
import defaultStyle, { FlatButtonStyle } from './index';
import successStyle from './success';

const primaryStyle = deepMerge({}, defaultStyle, defaultStyle.primary);
const secondaryStyle = deepMerge({}, defaultStyle, defaultStyle.secondary);

export interface FlatButtonStyling {
  color: ButtonColor;
  style: FlatButtonStyle;
}

export const stylize = (styling: FlatButtonStyling, props: ButtonProps) => [
  flat(styling),
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

export const primaryStyling = (props: ButtonProps) =>
  stylize({ color: PRIMARY, style: primaryStyle }, props);

export const secondaryStyling = (props: ButtonProps) =>
  stylize({ color: SECONDARY, style: secondaryStyle }, props);

export const successStyling = (props: ButtonProps) =>
  stylize({ color: SUCCESS, style: successStyle }, props);
