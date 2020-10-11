import React, { useEffect, useRef, useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Drop, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const SimpleDrop = () => {
  const targetRef = useRef();

  const [, setShowDrop] = useState(false);
  useEffect(() => {
    setShowDrop(true);
  }, []);

  return (
    <Hercules theme={microfocus} full>
      <Box fill align="center" justify="center">
        <Box
          background="dark-3"
          pad="medium"
          align="center"
          justify="start"
          ref={targetRef}
        >
          Target
        </Box>
        {targetRef.current && (
          <Drop
            align={{ top: 'bottom', left: 'left' }}
            target={targetRef.current}
          >
            <Box pad="large">Drop Contents</Box>
          </Drop>
        )}
      </Box>
    </Hercules>
  );
};

storiesOf('Drop', module).add('Simple', () => <SimpleDrop />, {
  chromatic: { disable: true },
});
