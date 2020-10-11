import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { Hercules, Grid, Heading } from 'hercules-theme';
import { microfocus } from 'hercules-theme/themes';

const H = ({ level, size }) => (
  <Heading level={level} size={size}>
    {`Heading ${level} ${size}`}
  </Heading>
);

H.propTypes = {
  level: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
};

const Set = ({ size }) => (
  <div>
    {[1, 2, 3, 4, 5, 6].map(level => (
      <H key={level} level={level} size={size} />
    ))}
  </div>
);

Set.propTypes = {
  size: PropTypes.string.isRequired,
};

const All = () => (
  <Hercules theme={microfocus}>
    <Grid columns="large" gap="medium">
      <Set size="medium" />
      <Set size="small" />
      <Set size="large" />
      <Set size="xlarge" />
    </Grid>
  </Hercules>
);

storiesOf('Heading', module).add('All', () => <All />);
