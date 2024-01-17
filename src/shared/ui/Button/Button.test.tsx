import { render, screen } from '@testing-library/react';
import { Button, ButtonVariants } from './Button';

describe('Button', () => {
  test('Button', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Button with clear class', () => {
    render(<Button variant={ButtonVariants.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
