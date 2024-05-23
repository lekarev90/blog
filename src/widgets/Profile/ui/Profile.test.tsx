import { screen } from '@testing-library/react';
import i18n from 'i18next';
import { userEvent } from '@testing-library/user-event';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import {
  EProfileCardTestIdButtons,
  EProfileCardTestIdInputs,
  getProfileCardTestId,
  getValidateTextError,
  profileReducer,
  EValidateProfileError,
} from '@/features/EditableProfileCard';
import { IStateSchema } from '@/app/providers/StoreProvider';

import { $api } from '@/shared/api/api';

import { Profile } from './Profile';

const userId = '1';

const asyncReducers = {
  profile: profileReducer,
};

const profile = {
  isLoading: false,
  data: {
    id: userId,
    firstName: 'admin',
    lastName: 'admin',
    age: '25',
    city: 'Moscow',
    username: 'admin',
    avatar: '123',
  },
  prevData: {
    id: userId,
    firstName: 'admin',
    lastName: 'admin',
    age: '25',
    city: 'Moscow',
    username: 'admin',
    avatar: '123',
  },
};

const initialState: Partial<IStateSchema> = {
  user: {
    authData: {
      id: userId,
      username: 'username',
    },
  },
  profile,
};

describe('widgets/Profile', () => {
  test('Edit mode shouldn be switched', async () => {
    componentRender(<Profile />, {
      initialState,
      asyncReducers,
    });

    const editButton = screen.getByTestId(getProfileCardTestId(EProfileCardTestIdButtons.EDIT_BUTTON));
    const firstNameInput = screen.getByTestId(getProfileCardTestId(EProfileCardTestIdInputs.FIRST_NAME));

    expect(firstNameInput).toBeDisabled();

    await userEvent.click(editButton);

    expect(firstNameInput).not.toBeDisabled();
  });

  test('Restore prev data on reset', async () => {
    componentRender(<Profile />, {
      initialState,
      asyncReducers,
    });

    const editButton = screen.getByTestId(getProfileCardTestId(EProfileCardTestIdButtons.EDIT_BUTTON));
    const firstNameInput = screen.getByTestId(getProfileCardTestId(EProfileCardTestIdInputs.FIRST_NAME));

    await userEvent.click(editButton);

    expect(firstNameInput).toHaveValue(profile.data.firstName);

    await userEvent.type(firstNameInput, 'new value');

    await userEvent.click(editButton);

    expect(firstNameInput).toHaveValue(profile.data.firstName);
  });

  test('Validate if required field is empty', async () => {
    componentRender(<Profile />, {
      initialState,
      asyncReducers,
    });

    const editButton = screen.getByTestId(getProfileCardTestId(EProfileCardTestIdButtons.EDIT_BUTTON));
    const saveButton = screen.getByTestId(getProfileCardTestId(EProfileCardTestIdButtons.SAVE_BUTTON));
    const firstNameInput = screen.getByTestId(getProfileCardTestId(EProfileCardTestIdInputs.FIRST_NAME));

    await userEvent.click(editButton);

    await userEvent.clear(firstNameInput);

    await userEvent.click(saveButton);

    const text = getValidateTextError(i18n.t)[EValidateProfileError.INCORRECT_USER_DATA];

    const elemWithError = screen.getByText(text);

    expect(elemWithError).toBeInTheDocument();
  });

  test('Fetch updated data on success', async () => {
    componentRender(<Profile />, {
      initialState,
      asyncReducers,
    });

    const mockedPut = jest.spyOn($api, 'put').mockImplementation();

    const editButton = screen.getByTestId(getProfileCardTestId(EProfileCardTestIdButtons.EDIT_BUTTON));
    const saveButton = screen.getByTestId(getProfileCardTestId(EProfileCardTestIdButtons.SAVE_BUTTON));
    const firstNameInput = screen.getByTestId(getProfileCardTestId(EProfileCardTestIdInputs.FIRST_NAME));

    await userEvent.click(editButton);

    await userEvent.clear(firstNameInput);
    await userEvent.type(firstNameInput, 'some new data');

    await userEvent.click(saveButton);

    expect(mockedPut).toHaveBeenCalledWith('/profile/1', expect.objectContaining({
      firstName: 'some new data',
    }));
  });
});
