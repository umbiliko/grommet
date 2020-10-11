import { css } from 'styled-components';
import themed from '../../utils/pick';
import _checkboxLabel from '../../quantum-ux/checkbox-label';

export const checkBoxLabel = {
  color: {
    dark: _checkboxLabel.colorDark,
    light: _checkboxLabel.color,
  },
  disabled: {
    color: {
      dark: _checkboxLabel.colorDisabledDark,
      light: _checkboxLabel.colorDisabled,
    },
  },
};

export const checkBoxLabelStyle = css`
  span {
    color: ${themed(checkBoxLabel.color)};
  }
`;
