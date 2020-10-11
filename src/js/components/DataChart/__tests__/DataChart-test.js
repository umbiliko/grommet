import React, { Fragment } from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Hercules } from '../../Hercules';
import { DataChart } from '..';

const data = [
  { a: 1, b: 'one', c: 111111, d: '2020-06-24' },
  { a: 2, b: 'two', c: 222222, d: '2020-06-23' },
];

describe('DataChart', () => {
  test('default', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const component = renderer.create(
      <Hercules>
        <DataChart data={data} series="a" />
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });

  test('gap', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const component = renderer.create(
      <Hercules>
        {['small', 'medium', 'large'].map(gap => (
          <DataChart key={gap} data={data} series="a" gap={gap} />
        ))}
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });

  test('pad', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const component = renderer.create(
      <Hercules>
        {['small', 'medium', 'large'].map(pad => (
          <DataChart key={pad} data={data} series="a" pad={pad} />
        ))}
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });

  test('size', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const component = renderer.create(
      <Hercules>
        {['fill', { width: 'fill' }, { width: 'auto' }].map((size, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <DataChart key={i} data={data} series="a" size={size} />
        ))}
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });

  test('axis', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const component = renderer.create(
      <Hercules>
        {[
          true,
          false,
          { x: { property: 'd' } },
          { y: { property: 'a' } },
          { x: { property: 'd', granularity: 'fine' } },
          { y: { property: 'a', granularity: 'fine' } },
        ].map((axis, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <DataChart key={i} data={data} series="a" axis={axis} />
        ))}
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });

  test('dates', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const dateData = [];
    for (let i = 0; i < 4; i += 1) {
      const digits = ((i % 12) + 1).toString().padStart(2, 0);
      dateData.push({
        second: `2020-05-15T08:04:${digits}`,
        minute: `2020-05-15T08:${digits}:00`,
        hour: `2020-05-15T${digits}:00:00`,
        day: `2020-05-${digits}T08:00:00`,
        month: `2020-${digits}-15`,
        year: `20${digits}-01-15`,
        percent: Math.abs(i * 10),
        amount: i * 111111,
      });
    }
    const component = renderer.create(
      <Hercules>
        {['second', 'minute', 'hour', 'day', 'month', 'year'].map(key => (
          <Fragment key={key}>
            <DataChart
              data={dateData}
              series={[{ property: key }, 'amount']}
              axis
              guide
            />
          </Fragment>
        ))}
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });

  test('guide', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const component = renderer.create(
      <Hercules>
        {[
          true,
          false,
          { x: { granularity: 'fine' } },
          { y: { granularity: 'fine' } },
        ].map((guide, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <DataChart key={i} data={data} series="a" guide={guide} />
        ))}
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });

  test('legend', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const component = renderer.create(
      <Hercules>
        {[true, false].map((legend, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <DataChart key={i} data={data} series="a" legend={legend} />
        ))}
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });

  test('detail', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const component = renderer.create(
      <Hercules>
        {[true, false].map((detail, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <DataChart key={i} data={data} series="a" detail={detail} />
        ))}
      </Hercules>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    warnSpy.mockRestore();
  });
});
