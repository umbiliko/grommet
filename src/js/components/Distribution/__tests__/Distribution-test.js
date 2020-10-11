import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import { Hercules } from '../../Hercules';
import { Distribution } from '..';

describe('Distribution', () => {
  test('renders', () => {
    const { container } = render(
      <Hercules>
        <Distribution values={[]} />
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('values renders', () => {
    const { container } = render(
      <Hercules>
        <Distribution
          values={[{ value: 20 }, { value: 3 }, { value: 2 }, { value: 1 }]}
        >
          {value => <span>{value.value}</span>}
        </Distribution>
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('gap renders', () => {
    const { container } = render(
      <Hercules>
        {['xsmall', 'small', 'medium', 'large'].map(gap => (
          <Distribution
            key={gap}
            gap={gap}
            values={[{ value: 3 }, { value: 2 }, { value: 1 }]}
          >
            {value => <span>{value.value}</span>}
          </Distribution>
        ))}
      </Hercules>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
