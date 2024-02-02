import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { type FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: Partial<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
