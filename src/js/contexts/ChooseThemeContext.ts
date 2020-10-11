import { createContext } from 'react';
import { HerculesProps, ThemeType } from 'hercules-theme';

export interface ThemeValueType extends Pick<HerculesProps, 'theme' | 'themeMode'> {
  baseSize?: number;
  canMode?: boolean;
  scale?: number;
  setTheme: (value: HerculesProps['theme']) => void;
  setThemeMode: (value: HerculesProps['themeMode']) => void;
  themes: Record<string, ThemeType>;
}

const ChooseThemeContext = createContext<ThemeValueType>({ } as any);

export default ChooseThemeContext;
