// AUTO-GENERATED BY npm run gen-iconmap at Wed Nov 13 2019 14:57:09 GMT-0600 (Central Standard Time)
import React, { createContext, Fragment, useContext } from 'react'
import * as icons from 'grommet-icons';
import { IconProps } from 'grommet-icons';

export const IconRename = createContext<Record<string, string>>({});

interface ExtendedIconProps extends IconProps {
  alt?: string;
  children: string;
}

const Icon = ({ alt, children, ...props }: ExtendedIconProps) => {
  const rename = useContext(IconRename);
  
  let Icon = icons[children];
  
  if (Icon) {
    return (<Icon {...props} />);
  }

  if (rename && (children = rename[children]) && (Icon = icons[children])) {
    return (<Icon {...props} />);
  }

   if (alt && (Icon = icons[alt])) {
    return (<Icon {...props} />);
  }

  return (<Fragment />);  
}

export default Icon;
