import { AsyncThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { MockedFunction } from 'jest-mock';
import { IStateSchema } from '@/app/providers/StoreProvider';
import { mockedApi } from '@/shared/const/tests';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<
Return,
Arg,
{
  rejectValue: RejectedValue;
}
>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => IStateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: MockedFunction<AxiosInstance>;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: Partial<IStateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as IStateSchema);

    this.api = mockedApi;
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);

    return action(this.dispatch, this.getState, { api: this.api });
  }
}
