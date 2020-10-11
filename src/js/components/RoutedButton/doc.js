import { describe } from 'react-desc';

import { ROUTER_PROPS } from '../../utils/router';
import { getAvailableAtBadge } from '../../utils/mixins';

export const doc = RoutedButton => {
  const DocumentedRoutedButton = describe(RoutedButton)
    .availableAt(getAvailableAtBadge('RoutedButton'))
    .description('A button with support for React Router.')
    .usage(
      `import { RoutedButton } from 'hercules-theme';
<RoutedButton primary path='/documentation' />`,
    )
    .intrinsicElement('button');
  DocumentedRoutedButton.propTypes = { ...ROUTER_PROPS };
  return DocumentedRoutedButton;
};
