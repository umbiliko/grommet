import React, { useEffect, useRef, useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Drop, Hercules } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';
import { deepMerge } from 'hercules-theme/utils';

const customTheme = deepMerge(microfocus, {
  global: {
    drop: {
      background: { dark: 'neutral-2', light: 'neutral-2' },
      border: { radius: '10px' },
      zIndex: '13',
    },
  },
});

const Custom = () => {
  const [, setShowDrop] = useState(false);
  const targetRef = useRef();

  useEffect(() => setShowDrop(true), []);
  return (
    <Hercules theme={customTheme} full>
      <Box fill align="center" justify="center">
        <Box
          background="dark-3"
          pad="medium"
          align="center"
          justify="start"
          ref={targetRef}
        >
          Box
        </Box>
        {targetRef.current && (
          <Drop
            align={{ top: 'bottom', left: 'right' }}
            target={targetRef.current}
          >
            <Box pad="small">This Drop uses a custom theme</Box>
          </Drop>
        )}
      </Box>
    </Hercules>
  );
};

storiesOf('Drop', module).add('Custom', () => <Custom />);
