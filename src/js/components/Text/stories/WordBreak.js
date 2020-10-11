import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, Text, Heading } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const wordBreakValues = ['normal', 'break-all', 'keep-all', 'break-word'];

/* eslint-disable max-len */
const WordBreak = () => (
  <Hercules theme={microfocus}>
    {wordBreakValues.map(value => (
      <Box key={value} margin="small" width="medium">
        <Heading level={4}>{`word-break: ${value};`}</Heading>
        <Text wordBreak={value}>
          Honorificabilitudinitatibus califragilisticexpialidocious
          Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
          グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
        </Text>
      </Box>
    ))}
  </Hercules>
);
/* eslint-enable max-len */

storiesOf('Text', module).add('Word break', () => <WordBreak />);
