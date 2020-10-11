import { CheckBoxProps } from '../../../components/CheckBox';
import { css } from 'styled-components';
import { PartialThemeGenerator } from '..';
import { checkBox, checkBoxStyle } from './checkBox';
import { checkBoxLabelStyle } from './checkboxLabel';
import { toggleStyle } from './checkboxSwitch';

const extend = css<CheckBoxProps>`
  ${(props: any) => !props.toggle && checkBoxStyle}
  ${(props: any) => props.toggle && toggleStyle}
  ${(props: any) => props.label && checkBoxLabelStyle}
`;

export type CheckBoxTheme = typeof checkBox;

const generator: PartialThemeGenerator<'checkBox'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    checkBox: {
      // ...checkBox,
      extend,
    },
  };
};

export default generator;
