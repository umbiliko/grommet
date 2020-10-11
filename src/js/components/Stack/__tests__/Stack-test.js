import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Hercules } from '../../Hercules';
import { Stack } from '..';

const CONTENTS = [<div key={1}>first</div>, <div key={2}>second</div>];

describe('Stack', () => {
  test('default', () => {
    const component = renderer.create(
      <Hercules>
        <Stack>{CONTENTS}</Stack>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('guidingChild', () => {
    const component = renderer.create(
      <Hercules>
        <Stack guidingChild="first">{CONTENTS}</Stack>
        <Stack guidingChild="last">{CONTENTS}</Stack>
        <Stack guidingChild={0}>{CONTENTS}</Stack>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('anchor', () => {
    const component = renderer.create(
      <Hercules>
        <Stack anchor="center">{CONTENTS}</Stack>
        <Stack anchor="top">{CONTENTS}</Stack>
        <Stack anchor="left">{CONTENTS}</Stack>
        <Stack anchor="bottom">{CONTENTS}</Stack>
        <Stack anchor="right">{CONTENTS}</Stack>
        <Stack anchor="top-left">{CONTENTS}</Stack>
        <Stack anchor="bottom-left">{CONTENTS}</Stack>
        <Stack anchor="top-right">{CONTENTS}</Stack>
        <Stack anchor="bottom-right">{CONTENTS}</Stack>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('fill', () => {
    const component = renderer.create(
      <Hercules>
        <Stack fill>{CONTENTS}</Stack>
        <Stack fill={false}>{CONTENTS}</Stack>
        <Stack fill="horizontal">{CONTENTS}</Stack>
        <Stack fill="vertical">{CONTENTS}</Stack>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('interactiveChild', () => {
    const component = renderer.create(
      <Hercules>
        <Stack interactiveChild="first">{CONTENTS}</Stack>
        <Stack interactiveChild="last">{CONTENTS}</Stack>
        <Stack interactiveChild={0}>{CONTENTS}</Stack>
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
