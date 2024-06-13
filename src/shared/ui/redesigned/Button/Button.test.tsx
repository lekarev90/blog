import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  test('Button', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Button with clear class', () => {
    render(<Button variant="clear">Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
