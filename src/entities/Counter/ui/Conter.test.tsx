import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { Counter } from './Counter';

describe('Counter', () => {
  test('should return counter value', () => {
    const initialState = { counter: { value: 10 } };
    componentRender(<Counter />, {
      initialState,
    });

    const expected = screen.getByTestId('value-title');
    const result = String(initialState.counter.value);

    expect(expected).toHaveTextContent(result);
  });

  test('increment', () => {
    const initialState = { counter: { value: 10 } };
    componentRender(<Counter />, {
      initialState,
    });

    const incrementBtn = screen.getByTestId('increment-btn');
    fireEvent.click(incrementBtn);

    const expected = screen.getByTestId('value-title');
    const result = '11';

    expect(expected).toHaveTextContent(result);
  });

  test('decrement', () => {
    const initialState = { counter: { value: 10 } };
    componentRender(<Counter />, {
      initialState,
    });

    const decrementBtn = screen.getByTestId('decrement-btn');
    fireEvent.click(decrementBtn);

    const expected = screen.getByTestId('value-title');
    const result = '9';

    expect(expected).toHaveTextContent(result);
  });
});
