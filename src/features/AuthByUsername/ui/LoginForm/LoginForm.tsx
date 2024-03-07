import { memo, useCallback } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextVariant } from 'shared/ui/Text/Text';

import { getLoginState } from '../../model/selectors/loginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
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

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cx(styles.container, className)}>
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
