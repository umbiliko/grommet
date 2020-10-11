import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Paragraph } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const sizes = ['xxlarge', 'xlarge', 'large', 'medium', 'small'];

const paragraphFiller = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
`;

const All = () => (
  <Hercules theme={microfocus}>
    {sizes.map(size => (
      <Paragraph key={size} size={size}>
        {`Paragraph ${size}`}
        {paragraphFiller}
      </Paragraph>
    ))}
    <Paragraph color="status-critical">This is an error message.</Paragraph>
    <Paragraph fill>
      This is a full-width paragraph, using the &quot;fill&quot; property:{' '}
      {paragraphFiller}
    </Paragraph>
  </Hercules>
);

storiesOf('Paragraph', module).add('All', () => <All />);
