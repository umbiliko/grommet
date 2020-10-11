import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Box, Hercules, Markdown } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const CONTENT = `
  # Out of Breath

  You know, sometimes in life it seems like there's no way out. Like
  a sheep trapped in a maze designed by wolves. See all the
  options [here](https://github.com/probablyup/markdown-to-jsx/)

  [reference](#)

\`\`\`
import { Hercules } from 'hercules-theme';
\`\`\`

  > i carry your heart with me

  ![alt text](//v2.grommet.io/assets/IMG_4245.jpg "Markdown Image")

  Markdown | Less | Pretty
  --- | --- | ---
  *Still* | \`renders\` | **nicely**
  1 | 2 | 3
`;

const SimpleMarkdown = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <Markdown>{CONTENT}</Markdown>
    </Box>
  </Hercules>
);

const StyledPre = styled.pre`
  background-color: #7d4cdb;
`;

const ComponentOverrideMarkdown = () => (
  <Hercules theme={microfocus}>
    <Box align="center" pad="large">
      <Markdown components={{ pre: StyledPre }}>{CONTENT}</Markdown>
    </Box>
  </Hercules>
);

storiesOf('Markdown', module)
  .add('Simple', () => <SimpleMarkdown />)
  .add('Component override markdown', () => <ComponentOverrideMarkdown />);
