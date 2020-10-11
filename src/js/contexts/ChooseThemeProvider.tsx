import { ThemeType } from 'grommet';
import React, { ReactNode, ReactNodeArray, useMemo, useState } from 'react';
import ChooseThemeContext, { ThemeValueType } from './ChooseThemeContext';

export interface ChooseThemeProviderProps extends Partial<ThemeValueType> {
  children?: ReactNode | ReactNodeArray;
}

const ChooseThemeProvider = (props: ChooseThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType | undefined>(props.theme);
  const [themeMode, setThemeMode] = useState<ThemeValueType['themeMode']>(
    props.themeMode || 'light'
  );

  const canMode = useMemo<boolean>(() => {
    const background = theme?.global?.colors?.background;
    return typeof background === 'object' && background?.dark ? true : false;
  }, [theme]);

  const value = useMemo<ThemeValueType>(
    () => ({
      canMode,
      setTheme,
      setThemeMode,
      theme,
      themeMode: canMode ? themeMode : 'light',
      themes: props.themes || {},
    }),
    [theme, themeMode, props.themes]
  );

  return <ChooseThemeContext.Provider value={value}>{props.children}</ChooseThemeContext.Provider>;
};

export default ChooseThemeProvider;
