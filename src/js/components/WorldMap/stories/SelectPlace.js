import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Hercules, WorldMap } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const Example = () => {
  const [places, setPlaces] = React.useState();

  const onSelectPlace = place => {
    setPlaces([{ color: 'graph-1', location: place }]);
  };

  return (
    <Hercules theme={microfocus}>
      <Box align="center" pad="large">
        <WorldMap onSelectPlace={onSelectPlace} places={places} />
      </Box>
    </Hercules>
  );
};

storiesOf('WorldMap', module).add('Select place', () => <Example />);
