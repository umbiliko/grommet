import React from 'react';
import { storiesOf } from '@storybook/react';
import { Attraction, Car, TreeOption } from 'grommet-icons';

import { Hercules, Box, Carousel } from 'hercules-theme';

const SimpleCarousel = ({ initialChild, ...props }) => {
  return (
    <Hercules>
      <Box align="center" pad="large">
        <Carousel initialChild={initialChild} {...props}>
          <Box pad="xlarge" background="accent-1">
            <Attraction size="xlarge" />
          </Box>
          <Box pad="xlarge" background="accent-2">
            <TreeOption size="xlarge" />
          </Box>
          <Box pad="xlarge" background="accent-3">
            <Car size="xlarge" />
          </Box>
        </Carousel>
      </Box>
    </Hercules>
  );
};

storiesOf('Carousel', module)
  .add('Simple', () => <SimpleCarousel />, {
    chromatic: { disable: true },
  })
  .add('Initial child', () => <SimpleCarousel initialChild={1} />)
  .add('Without controls', () => (
    <SimpleCarousel controls={false} play={1500} />
  ));
