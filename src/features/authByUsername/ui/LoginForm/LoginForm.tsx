import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { Button, ButtonVariants } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, TextVariant } from '@/shared/ui/Text';

import { getLoginState } from '../../model/selectors/loginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { setUsername, setPassword } = loginActions;
  const {
    username = '', password = '', error, isLoading,
  } = useSelector(getLoginState) || {};

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(setUsername(value));
    },
    [dispatch, setUsername],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(setPassword(value));
    },
    [dispatch, setPassword],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, password, username, onSuccess]);

  const onEnterDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onLoginClick();
      }
    },
    [onLoginClick],
  );

  useEffect(() => {
    window.addEventListener('keydown', onEnterDown);

    return () => {
      window.removeEventListener('keydown', onEnterDown);
    };
  }, [onEnterDown]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={styles.container}>
        <Text title={t('translation:authModal.title')} />
        {error && (
          <Text
            text={error}
            variant={TextVariant.ERROR}
          />
        )}
        <Input
          name="username"
          placeholder={t('translation:authModal.username')}
          autofocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          name="password"
          placeholder={t('translation:authModal.password')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={styles.loginBtn}
          variant={ButtonVariants.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('translation:authModal.loginBtn')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
