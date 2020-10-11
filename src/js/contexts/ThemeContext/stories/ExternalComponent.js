import React from 'react';
import { storiesOf } from '@storybook/react';

import { microfocus } from 'hercules-theme/themes';
import { Box, Text, ThemeContext, Hercules } from 'hercules-theme';

const ExternalComponentWithTheme = () => (
  <Hercules theme={microfocus}>
    <Box background="neutral-3">
      <Text color="light-1">This is a grommet component</Text>
    </Box>
    <ThemeContext.Consumer>
      {theme => (
        <div style={{ backgroundColor: theme.global.colors['neutral-3'] }}>
          <p style={{ color: theme.global.colors['light-1'] }}>
            This component is leveraging the grommet theme capabilities although
            it is not a grommet component
          </p>
        </div>
      )}
    </ThemeContext.Consumer>
  </Hercules>
);

storiesOf('Theme', module).add('External components', () => (
  <ExternalComponentWithTheme />
));
