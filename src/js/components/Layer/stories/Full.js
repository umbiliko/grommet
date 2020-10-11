import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Button, Hercules, Layer } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const FullLayer = () => {
  const [showLayer, setShowLayer] = React.useState(false);

  return (
    <Hercules theme={microfocus} full>
      <Box pad="small" fill background="dark-3" align="center" justify="center">
        <Button
          primary
          color="accent-3"
          label="Show"
          onClick={() => setShowLayer(true)}
        />
        {showLayer && (
          <Layer full animation="fadeIn">
            <Box fill background="light-4" align="center" justify="center">
              <Button
                primary
                label="Close"
                onClick={() => setShowLayer(false)}
              />
            </Box>
          </Layer>
        )}
      </Box>
    </Hercules>
  );
};

storiesOf('Layer', module).add('Full', () => <FullLayer />, {
  chromatic: { disable: true },
});
