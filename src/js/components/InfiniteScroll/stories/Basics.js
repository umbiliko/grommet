import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, InfiniteScroll, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

export const allItems = Array(2000)
  .fill()
  .map((_, i) => `item ${i + 1}`);

const SimpleInfiniteScroll = props => (
  <Hercules theme={microfocus}>
    <Box>
      <InfiniteScroll items={allItems} {...props}>
        {item => (
          <Box
            key={item}
            pad="medium"
            border={{ side: 'bottom' }}
            align="center"
          >
            <Text>{item}</Text>
          </Box>
        )}
      </InfiniteScroll>
    </Box>
  </Hercules>
);

storiesOf('InfiniteScroll', module)
  .add('Simple', () => <SimpleInfiniteScroll />)
  .add('Show 118th item', () => <SimpleInfiniteScroll show={117} />)
  .add('Marker', () => (
    <SimpleInfiniteScroll
      renderMarker={marker => (
        <Box pad="medium" background="accent-1">
          {marker}
        </Box>
      )}
    />
  ));
