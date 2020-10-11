import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Hercules } from '../../Hercules';
import { WorldMap } from '..';

describe('WorldMap', () => {
  test('default', () => {
    const component = renderer.create(
      <Hercules>
        <WorldMap />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('color', () => {
    const component = renderer.create(
      <Hercules>
        <WorldMap color="brand" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('continents', () => {
    const component = renderer.create(
      <Hercules>
        <WorldMap
          continents={[
            {
              name: 'Africa',
              color: 'accent-1',
              onClick: () => {},
            },
          ]}
        />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('places', () => {
    const component = renderer.create(
      <Hercules>
        <WorldMap
          places={[
            {
              name: 'Sydney',
              location: [-33.8830555556, 151.216666667],
              color: 'accent-1',
              onClick: () => {},
            },
          ]}
        />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('onSelectPlace', () => {
    const component = renderer.create(
      <Hercules>
        <WorldMap onSelectPlace={() => {}} />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('fill', () => {
    const component = renderer.create(
      <Hercules>
        <WorldMap fill />
        <WorldMap fill={false} />
        <WorldMap fill="horizontal" />
        <WorldMap fill="vertical" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
