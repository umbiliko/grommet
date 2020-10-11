import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grid, Hercules, Box, Image, InfiniteScroll, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

import { allItems } from './Basics';

const GridInfiniteScroll = ({ ...rest }) => (
  <Hercules theme={microfocus}>
    <Grid columns="xsmall" rows="small">
      <InfiniteScroll items={allItems} step={12} {...rest}>
        {item => (
          <Box key={item} as="article" pad="xsmall">
            <Image src="https://via.placeholder.com/350x150" />
            <Text>{item}</Text>
          </Box>
        )}
      </InfiniteScroll>
    </Grid>
  </Hercules>
);

storiesOf('InfiniteScroll', module)
  .add('Grid', () => <GridInfiniteScroll />)
  .add('Grid with show item 77', () => <GridInfiniteScroll show={78} />);
