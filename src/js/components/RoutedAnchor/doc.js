import { describe } from 'react-desc';

import { ROUTER_PROPS } from '../../utils/router';
import { getAvailableAtBadge } from '../../utils/mixins';

export const doc = RoutedAnchor => {
  const DocumentedRoutedAnchor = describe(RoutedAnchor)
    .availableAt(getAvailableAtBadge('RoutedAnchor'))
    .description('An Anchor with support for React Router.')
    .usage(
      "import { RoutedAnchor } from 'hercules-theme';\n" +
        "<RoutedAnchor primary path='/documentation' />",
    )
    .intrinsicElement('a');
  DocumentedRoutedAnchor.propTypes = { ...ROUTER_PROPS };
  return DocumentedRoutedAnchor;
};
