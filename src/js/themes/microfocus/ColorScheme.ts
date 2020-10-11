import { normalize } from '../utils/pick';

export default interface ButtonColorScheme {
  background: {
    color: normalize;
  },
  border: {
    color: normalize;
    [key: string]: any;
  };
  boxShadow: normalize;
  color: normalize;
}
