import { css } from 'styled-components';
import { ExtendType, PartialThemeGenerator } from '.';
import _form from '../quantum-ux/form';
import paper from '../quantum-ux/paper';

export const form = {
  boxShadow: _form.boxShadow,
  marginTop: _form.marginTop,

  fieldset: {
    marginTop: _form.fieldsetMarginTop,
  },
  footer: {
    paddingBottom: _form.footerPaddingBottom,
    paddingTop: _form.footerPaddingTop,
  },
  header: {
    paddingLeft: _form.headerPaddingLeft,
  },

  small: {
    width: _form.smallSize,
  },

  medium: {
    width: _form.mediumSize,
  },

  large: {
    width: _form.largeSize,
  },
};

export type FormTheme = typeof form & {
  extend?: ExtendType;
};

const formStyle = css`
  box-shadow: ${form.boxShadow};
  margin-top: ${form.marginTop};

  &.shadow {
    box-shadow: ${paper.boxShadowDepth1};
  }
  fieldset {
    header {
      padding-left: ${form.header.paddingLeft};
    }
  }
  footer {
    padding-bottom: ${form.footer.paddingBottom};
    padding-top: ${form.footer.paddingTop};
  }
  fieldset {
    margin-top: ${form.fieldset.marginTop};
  }
`;

const extend = css<{ size: 'small' | 'medium' | 'large' }>`
  ${formStyle}
  ${(props: any) => css`
    width: ${(props.size ? form[props.size] || form.medium : form.medium)
      .width};
  `}
`;

const generator: PartialThemeGenerator<'form'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    form: {
      extend,
    },
  };
};

export default generator;
