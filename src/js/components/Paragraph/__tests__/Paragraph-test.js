import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Hercules } from '../../Hercules';
import { Paragraph } from '..';

test('Paragraph renders', () => {
  const component = renderer.create(
    <Hercules>
      <Paragraph />
    </Hercules>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Paragraph size renders', () => {
  const component = renderer.create(
    <Hercules>
      <Paragraph size="small" />
      <Paragraph size="medium" />
      <Paragraph size="large" />
      <Paragraph size="xlarge" />
      <Paragraph size="xxlarge" />
      <Paragraph fill />
      <Paragraph fill={false} />
    </Hercules>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Paragraph margin renders', () => {
  const component = renderer.create(
    <Hercules>
      <Paragraph margin="small" />
      <Paragraph margin="medium" />
      <Paragraph margin="large" />
      <Paragraph margin="none" />
      <Paragraph margin={{ bottom: 'small' }} />
      <Paragraph margin={{ top: 'small' }} />
    </Hercules>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Paragraph textAlign renders', () => {
  const component = renderer.create(
    <Hercules>
      <Paragraph textAlign="start" />
      <Paragraph textAlign="center" />
      <Paragraph textAlign="end" />
    </Hercules>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
