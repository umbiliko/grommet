import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils/mixins';

export const doc = Markdown => {
  const DocumentedMarkdown = describe(Markdown)
    .availableAt(getAvailableAtBadge('Markdown'))
    .description('Markdown formatting using Hercules components.')
    .details(
      `Hercules uses 'markdown-to-jsx' in Markdown component,
      you can see all the options in the documentation.`,
    )
    .usage(
      `import { Markdown } from 'hercules-theme';
      <Markdown>{content}</Markdown>`,
    )
    .intrinsicElement('div');

  DocumentedMarkdown.propTypes = {
    components: PropTypes.shape({}).description(
      `Custom components and props to override html elements such as 'img'
      or 'pre'. By default 'a', 'p', 'img', and table elements are overridden
      with grommet components`,
    ),
    options: PropTypes.shape({}).description(
      `Used to tune the jsx compiler to specific properties, available options on [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx).`,
    ),
  };

  return DocumentedMarkdown;
};
