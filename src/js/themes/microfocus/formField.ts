import { css } from 'styled-components';
import { PartialThemeGenerator } from '.';
import color from '../quantum-ux/color';
import _formField from '../quantum-ux/form-field';
import input from '../quantum-ux/input';
import _text from '../quantum-ux/text';
import pick from '../utils/pick';

export const formField = {
  minHeight: _formField.minHeight,

  hover: {
    borderBottomColor: {
      dark: input.borderColorDark,
      light: input.borderColor,
    },
  },

  help: {
    float: _formField.helpFloat,
    marginLeft: _formField.helpMarginLeft,
    width: _formField.helpWidth,
  },

  input: {
    borderBottomWidth: input.borderWidthBottom,
    paddingRight: input.paddingRight,
    paddingLeft: input.paddingLeft,
    focus: {
      paddingRight: input.paddingRight,
      paddingLeft: input.paddingLeft,
      borderBottomWidth: input.borderWidthBottom,
    },
  },

  color: {},

  search: {
    paddingTop: _formField.datetimePaddingTop,
  },

  email: {},

  error: {
    borderColor: {
      dark: input.borderColorErrorDark,
      light: input.borderColorError,
    },

    color: {
      dark: color.accent4,
      light: color.accent4,
    },
    display: _formField.errorDisplay,
    textAlign: _formField.errorTextalign,
    fontSize: _text.helpBlockFontSize,
    position: _formField.errorPosition,
    bottom: _formField.errorBottom,
    left: _formField.errorLeft,
    marginLeft: _formField.errorMarginLeft,

    icon: {
      content: '',
      backgroundImage: 'url(${_iconSeverityCriticalBadge16',
      display: _formField.errorDisplayBefore,
      height: _formField.errorIconHeight,
      width: _formField.errorIconWidth,
      marginRight: _formField.errorMarginRight,
      verticalAlign: _formField.errorVerticalAlign,
      backgroundRepeat: _formField.errorBackgroundRepeat,
    },
  },

  file: {},

  label: {
    width: _formField.labelWidth,
    float: _formField.labelFloat,
    marginRight: _formField.labelMarginRight,
    fontSize: '14px',
  },

  number: {},

  password: {},

  range: {
    marginLeft: _formField.rangeinputMargingLeft,
    paddingLeft: _formField.rangeinputPaddingLeft,
    paddingRight: _formField.rangeinputPaddingRight,
    focus: {
      marginLeft: _formField.rangeinputMargingLeft,
      paddingLeft: _formField.rangeinputPaddingLeft,
      paddingRight: _formField.rangeinputPaddingRight,
    },
  },

  select: {
    width: _formField.selectInputWidth,
  },

  text: {
    backgroundColor: {
      dark: input.backgroundColorDark,
      light: input.backgroundColor,
    },
    paddingLeft: input.paddingLeft,
    paddingRight: input.paddingRight,
    focus: {
      paddingLeft: input.paddingLeft,
      paddingRight: input.paddingRight,
      borderTop: _formField.textinputBorderTop,
      borderLeft: _formField.textinputBorderLeft,
      borderRight: _formField.textinputBorderRight,
    },
  },
};

export type FormFieldTheme = typeof formField;

const formFieldBaseStyle = css`
  border: none;
  min-height: ${formField.minHeight};
  position: relative;
  overflow: hidden;
  padding: 5px 24px;
  :not(span),
  :not(button) {
    flex-direction: row;
  }
  div {
    &:hover {
      border-bottom-color: ${pick(formField.hover.borderBottomColor)};
    }
  }
  > div:first-of-type {
    border-bottom: none;
  }
  > label:first-of-type {
    float: ${formField.label.float};
    font-size: ${formField.label.fontSize};
    margin-right: ${formField.label.marginRight};
    width: ${formField.label.width};
  }

  > :first-child {
    border: none;
  }

  > div:nth-child(2) {
    width: 70%;
  }

  help {
    float: ${formField.help.float};
    margin-left: ${formField.help.marginLeft};
    width: ${formField.help.width};
  }
`;

const formFieldErrorStyle = css`
  label ~ span {
    color: ${pick(formField.error.color)};
    display: ${formField.error.display};
    text-align: ${formField.error.textAlign};
    font-size: ${formField.error.fontSize};
    position: ${formField.error.position};
    bottom: ${formField.error.bottom};
    left: ${formField.error.left};
    margin-left: ${formField.error.marginLeft};

    &:before {
      content: '';
      background-image: ${formField.error.icon.backgroundImage};
      background-repeat: ${formField.error.icon.backgroundRepeat};
      display: ${formField.error.icon.display};
      height: ${formField.error.icon.height};
      margin-right: ${formField.error.icon.marginRight};
      vertical-align: ${formField.error.icon.verticalAlign};
      width: ${formField.error.icon.width};
    }
  }
`;

const formFieldErrorInputStyle = css`
  > div > input[type='text'],
  > div > input[type='email'],
  > div > input[type='password'] {
    border-bottom: ${formField.input.borderBottomWidth} ${input.borderStyle}
      ${pick(formField.error.borderColor)};
  }
`;

const formFieldInputStyle = css`
  label + div {
    overflow: hidden;
    > div input:not(type='range') {
      padding-bottom: 2px;
    }
    > div input[type='text'],
    > div input[type='email'],
    > div input[type='password'],
    > div input[type='number'],
    > div select,
    > div search-input input,
    > div calendar input,
    > div date-time input,
    > div text-input,
    > div select input,
    > div select,
    > div password-input input {
      padding-right: ${formField.input.paddingRight};
      padding-left: ${formField.input.paddingLeft};
      padding-bottom: 2px;
      margin-bottom: ${_formField.textareaMarginBottom};
      box-sizing: unset;
      &:focus {
        padding-right: ${formField.input.focus.paddingRight};
        padding-left: ${formField.input.focus.paddingLeft};
        border-bottom-width: ${formField.input.borderBottomWidth};
      }
    }
    > div input[type='range'] {
      margin-left: ${formField.range.marginLeft};
      &:focus {
        margin-left: ${formField.range.focus.marginLeft};
      }
    }
    div input[type='number'] {
      padding-right: ${formField.input.paddingRight};
      padding-left: ${formField.input.paddingLeft};
      &:focus {
        padding-right: ${formField.input.paddingRight};
        padding-left: ${formField.input.paddingLeft};
      }
    }
    > div input[type='file'],
    > div input[type='color'] {
      padding-left: ${formField.range.paddingLeft};
      padding-right: ${formField.range.paddingRight};
      &:focus {
        padding-left: ${formField.range.focus.paddingLeft};
        padding-right: ${formField.range.focus.paddingRight};
      }
    }
    > div search-input,
    > div calendar,
    > div date-time {
      search-input,
      calendar,
      date-time {
        top: ${formField.search.paddingTop};
      }
    }
    > div select input {
      width: ${formField.select.width};
    }

    > div .input.text-input.input {
      background: ${pick(formField.text.backgroundColor)};
      padding-left: ${formField.text.paddingLeft};
      padding-right: ${formField.text.paddingRight};
      &:focus {
        padding-left: ${formField.text.paddingLeft};
        padding-right: ${formField.text.paddingRight};
        border-top: ${formField.text.focus.borderTop};
        border-left: ${formField.text.focus.borderLeft};
        border-right: ${formField.text.focus.borderRight};
      }
    }
  }
`;

const extend = css<{ error: string }>`
  ${formFieldBaseStyle}
  ${(props: any) => props.error && formFieldErrorInputStyle}
  ${formFieldInputStyle}
  ${formFieldErrorStyle}
`;

const generator: PartialThemeGenerator<'formField'> = ({
  baseSpacing = 24,
  scale = 6,
}) => {
  return {
    formField: {
      ...formField,
      extend,
    },
  };
};

export default generator;
