import { describe } from 'react-desc';

import { getAvailableAtBadge } from '../../utils/mixins';

export const doc = Header => {
  const DocumentedHeader = describe(Header)
    .availableAt(getAvailableAtBadge('Header'))
    .description('Is a Box container for introductory content')
    .usage(
      `import { Header } from 'hercules-theme';
<Header />`,
    );

  return DocumentedHeader;
};
