import { ButtonProps } from '../Button';
import React from 'react';
import { ButtonColor } from '../../themes/microfocus/button/base/styling';
import BaseButton from './BaseButton';
import FlatButton from './FlatButton';

export const CIRCULAR = 'circular';
export const CONTAINED = 'contained';
export const FLAT = 'flat';
export const FLOATING = 'floating';
export const OUTLINED = 'outlined';

export type Circular = typeof CIRCULAR;
export type Contained = typeof CONTAINED;
export type Flat = typeof FLAT;
export type Floating = typeof FLOATING;
export type Outlined = typeof OUTLINED;

export type ButtonVariant = Circular | Contained | Flat | Floating | Outlined;

export interface ButtonWithVariantProps extends ButtonProps {
  color?: ButtonColor;
  variant?: ButtonVariant;
}

const ButtonWithVariant = React.memo(
  ({ variant, ...props }: ButtonWithVariantProps): JSX.Element => {
    switch (variant) {
      case CIRCULAR:
        return <BaseButton {...props} />;
      case CONTAINED:
        return <BaseButton {...props} />;
      case FLOATING:
        return <BaseButton {...props} />;
      case OUTLINED:
        return <BaseButton {...props} />;
      case FLAT:
        return <FlatButton {...props} />;
      default:
        return <BaseButton {...props} />;
    }
  }
);

export default ButtonWithVariant;
