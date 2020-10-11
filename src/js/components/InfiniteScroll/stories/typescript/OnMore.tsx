import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import {
  Hercules,
  Box,
  InfiniteScroll,
  InfiniteScrollProps,
  Text,
} from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

import { allItems } from '../Basics';

// 'interface' declarations can only be used in TypeScript files.
// Remove ': 'interface IProps' if you are not using Typescript.
export interface IProps {
  props?: InfiniteScrollProps;
  step?: InfiniteScrollProps['step'];
}

// Type annotations can only be used in TypeScript files.
// Remove ': React.FC<IProps>' if you are not using Typescript.
const OnMoreInfiniteScroll: React.FC<IProps> = ({ props }) => {
  const [items, setItems] = useState(allItems.slice(0, 50));

  const onMore = () => {
    setTimeout(() => {
      setItems(allItems.slice(0, items.length + 50));
    }, 1000);
  };

  return (
    <Hercules theme={microfocus}>
      <Box>
        <InfiniteScroll items={items} onMore={onMore} {...props}>
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
};

storiesOf('InfiniteScroll', module)
  .add('onMore', () => <OnMoreInfiniteScroll />)
  .add('onMore step', () => <OnMoreInfiniteScroll step={75} />);
