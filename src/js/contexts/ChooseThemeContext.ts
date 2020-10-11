import { createContext } from 'react';
import { GrommetProps, ThemeType } from 'grommet';

export interface ThemeValueType extends Pick<GrommetProps, 'theme' | 'themeMode'> {
  baseSize?: number;
  canMode?: boolean;
  scale?: number;
  setTheme: (value: GrommetProps['theme']) => void;
  setThemeMode: (value: GrommetProps['themeMode']) => void;
  themes: Record<string, ThemeType>;
}

const ChooseThemeContext = createContext<ThemeValueType>({ } as any);

export default ChooseThemeContext;
