import React from 'react';
import { storiesOf } from '@storybook/react';

import { base } from 'hercules-theme/themes';
import { deepMerge } from 'hercules-theme/utils';

import { Box, extendDefaultTheme } from 'hercules-theme';

extendDefaultTheme(
  deepMerge(base, {
    global: {
      colors: {
        brand: 'red',
      },
    },
  }),
);

const CustomDefaultProps = () => (
  <Box background="brand" pad="small">
    Hello
  </Box>
);

storiesOf('Theme', module).add('Extend default', () => <CustomDefaultProps />);
