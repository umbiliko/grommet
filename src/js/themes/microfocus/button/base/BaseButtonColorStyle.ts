import ColorScheme from '../../ColorScheme';

export default interface BaseButtonColorStyle extends ColorScheme {
  active: ColorScheme;
  disabled: ColorScheme;
  focus: ColorScheme;
  hover: ColorScheme;
}
