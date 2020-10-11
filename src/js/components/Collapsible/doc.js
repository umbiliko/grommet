import { describe, PropTypes } from 'react-desc';

export const doc = Collapsible => {
  const DocumentedCollapsible = describe(Collapsible)
    .description('Expand or collapse animation.')
    .usage(
      `import { Collapsible } from 'hercules-theme';
<Collapsible open>test</Collapsible>`,
    )
    .intrinsicElement('div');

  DocumentedCollapsible.propTypes = {
    open: PropTypes.bool.description(
      'Whether or not the component should be open.',
    ),
    direction: PropTypes.oneOf(['horizontal', 'vertical'])
      .description('Direction to animate the collapsible content.')
      .defaultValue('vertical'),
  };

  return DocumentedCollapsible;
};

export const themeDoc = {
  'collapsible.minSpeed': {
    description: 'The minimum speed of Collapsible animation in milliseconds.',
    type: 'number',
    defaultValue: 200,
  },
  'collapsible.baseline': {
    description:
      'Default height to be used to calculate the optimal collapsible speed.',
    type: 'number',
    defaultValue: 500,
  },
  'collapsible.extend': {
    description: 'Any additional style for Collapsible.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
};
