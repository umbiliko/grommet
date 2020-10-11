import { brand_w3c_hex } from './base';

/*
 ** Content Layers
 */
export const background = {
  backgroundColor: '#192124',
  boxShadow: 'none',
};

export const content_panes = {
  backgroundColor: '#192124',
  boxShadow: '2px 2px rgba(0,0,0,0.3)',
  hover: {
    boxShadow: '5px 5px rgba(0,0,0,0.1)',
  },
};

export const side_panes = {
  backgroundColor: '#203037',
  boxShadow: '5px 5px rgba(0,0,0,0.1)',
};

export const masthead = {
  backgroundColor: brand_w3c_hex,
  boxShadow: 'none',
};

export const content_layers = [background, content_panes, side_panes, masthead];

export const [layer0, layer1, layer2, later3] = content_layers;

/*
 * Tiles
 */
export const tiles = {
  ...layer2,
};

/*
 ** Menus
 */

export const menus = {
  ...layer2,
};

/*
 ** Primary Buttons
 */

/*
 ** Secondary Buttons
 */

/*
 ** Basic UI Components
 */

/*
 ** Radio
 */

/*
 ** CheckBox
 */

/*
 ** Toggle
 */

/*
 ** Slider
 */
