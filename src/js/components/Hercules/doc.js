import { describe, PropTypes } from 'react-desc';

import { backgroundDoc } from '../../utils/prop-types';
import { getAvailableAtBadge } from '../../utils/mixins';

export const doc = Hercules => {
  const DocumentedGrommet = describe(Hercules)
    .availableAt(getAvailableAtBadge('Hercules'))
    .description('The top level Hercules container.')
    .usage(
      `import { Hercules } from 'hercules-theme';
<Hercules>...</Hercules>`,
    )
    .intrinsicElement('div');

  DocumentedGrommet.propTypes = {
    background: backgroundDoc,
    dir: PropTypes.oneOf(['rtl']).description(
      'Layout direction for right to left contexts',
    ),
    full: PropTypes.bool
      .description('Whether to take the whole viewport.')
      .defaultValue(false),
    plain: PropTypes.bool
      .description(
        `Whether or not Hercules should apply a global font-family, font-size,
        and line-height.`,
      )
      .defaultValue(false),
    cssVars: PropTypes.bool
      .description('Whether to expose the css variables.')
      .defaultValue(false),
    theme: PropTypes.object.description(
      'Custom styles for Hercules app component.',
    ),
    themeMode: PropTypes.oneOf(['dark', 'light']).description(
      `Dark vs. light theme variation. Default is unspecified and left to
      theme.`,
    ),
    userAgent: PropTypes.string.description(
      `User agent used to detect the device width for setting the initial
      breakpoint.`,
    ),
    containerTarget: PropTypes.object.description(
      `The node where Drop and Layer containers are inserted. Defaults to
      document.body which is almost always the right choice. This is used
      for less common cases like rendering within an internal node (e.g.
      shadow root).`,
    ),
  };

  return DocumentedGrommet;
};

export const themeDoc = {
  'hercules-theme.extend': {
    description: 'Any additional style for Hercules.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'global.font.face': {
    description: 'Custom font face declaration',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
};