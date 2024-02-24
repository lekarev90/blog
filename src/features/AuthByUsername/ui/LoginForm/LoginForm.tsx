import classNames from 'classnames/bind';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';

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
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();

  const { setUsername, setPassword } = loginActions;
  const {
    username = '', password = '', error, isLoading,
  } = useSelector(getLoginState) || {};
  console.log(username);
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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

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
          placeholder={t('translation:authModal.username')}
          autofocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
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
