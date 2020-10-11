import * as React from 'react';
import { ThemeType } from '../../themes';
import { BackgroundType } from '../../utils';

export interface HerculesProps {
  background?: BackgroundType;
  containerTarget?: HTMLElement;
  cssVars?: boolean;
  dir?: 'rtl';
  full?: boolean;
  plain?: boolean;
  theme?: ThemeType;
  themeMode?: 'dark' | 'light';
  userAgent?: string;
}

declare const Hercules: React.ComponentClass<HerculesProps &
  JSX.IntrinsicElements['div']>;

export { Hercules };
