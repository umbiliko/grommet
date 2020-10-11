import React, { Component } from 'react';
import { render } from 'react-dom';

import { microfocus, Box, Heading, Hercules, Paragraph } from 'hercules-theme';

class App extends Component {
  render() {
    return (
      <Hercules theme={microfocus}>
        <Box pad="small">
          <Heading level={3}>
            <strong>Hello World</strong>
          </Heading>
          <Paragraph>Hello from a Hercules Theme page!</Paragraph>
        </Box>
      </Hercules>
    );
  }
}

render(<App />, document.getElementById('root'));
