import { FormEvent, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { Button as ButtonDeprecated, ButtonVariants } from '@/shared/ui/depricated/Button';
import { Input as InputDeprecated } from '@/shared/ui/depricated/Input';
import { Text as TextDeprecated, TextVariant } from '@/shared/ui/depricated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

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
    const result = await dispatch(
      loginByUsername({
        username,
        password,
      }),
    );

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, password, username, onSuccess]);

  const onSubmitHandel = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onLoginClick();
  }, [onLoginClick]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <form onSubmit={onSubmitHandel}>
        <VStack gap="8">
          <ToggleFeatures
            feature="isOldDesign"
            on={(
              <>
                <TextDeprecated title={t('translation:authModal.title')} />
                {error && <TextDeprecated text={error} variant={TextVariant.ERROR} />}
                <InputDeprecated
                  name="username"
                  placeholder={t('translation:authModal.username')}
                  autofocus
                  onChange={onChangeUsername}
                  value={username}
                />
                <InputDeprecated
                  name="password"
                  placeholder={t('translation:authModal.password')}
                  onChange={onChangePassword}
                  value={password}
                />
                <ButtonDeprecated className={styles.loginBtn} variant={ButtonVariants.OUTLINE} type="submit" disabled={isLoading}>
                  {t('translation:authModal.loginBtn')}
                </ButtonDeprecated>
              </>
          )}
            off={(
              <>
                <Text title={t('translation:authModal.title')} />
                {error && <Text text={error} variant={TextVariant.ERROR} />}
                <Input
                  name="username"
                  placeholder={t('translation:authModal.username')}
                  autofocus
                  onChange={onChangeUsername}
                  value={username}
                />
                <Input name="password" placeholder={t('translation:authModal.password')} onChange={onChangePassword} value={password} />
                <Button className={styles.loginBtn} variant="outline" type="submit" disabled={isLoading}>
                  {t('translation:authModal.loginBtn')}
                </Button>
              </>
          )}
          />
        </VStack>
      </form>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
