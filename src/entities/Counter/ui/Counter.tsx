import { useSelector } from 'react-redux';

import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';

import { decrementAction, incrementAction } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(incrementAction());
  };
  const decrement = () => { dispatch(decrementAction()); };

  return (
    <div>
      <h1 data-testid="value-title">
        {counterValue}
      </h1>
      <Button
        variant={ButtonVariants.OUTLINE}
        onClick={increment}
        data-testid="increment-btn"
      >
        in
      </Button>
      <Button
        variant={ButtonVariants.OUTLINE}
        onClick={decrement}
        data-testid="decrement-btn"
      >
        de
      </Button>
    </div>
  );
};
