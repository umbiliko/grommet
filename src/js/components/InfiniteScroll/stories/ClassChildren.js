import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hercules, Box, InfiniteScroll, Text } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

import { allItems } from './Basics';

/* eslint-disable react/prefer-stateless-function */
const MyItem = ({ item }) => {
  return (
    <Box pad="medium" border={{ side: 'bottom' }} align="center">
      <Text>{item}</Text>
    </Box>
  );
};

const ClassChildrenInfiniteScroll = props => (
  <Hercules theme={microfocus}>
    <Box>
      <InfiniteScroll items={allItems} {...props}>
        {item => <MyItem key={item} item={item} />}
      </InfiniteScroll>
    </Box>
  </Hercules>
);

storiesOf('InfiniteScroll', module).add('Class children', () => (
  <ClassChildrenInfiniteScroll />
));
