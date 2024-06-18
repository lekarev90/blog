import { useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import CopyIconNew from '@/shared/assets/icons/copy.svg';
import { ToggleFeatures } from '@/shared/lib/features';

import { Button as ButtonDeprecated, ButtonSize } from '../../depricated/Button';
import { Icon as IconDeprecated } from '../../depricated/Icon/Icon';
import { Icon } from '../Icon/Icon';

import styles from './Code.module.scss';

interface CodeProps {
  text: string;
}

export const Code = ({ text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <pre className={styles.container}>
          <div className={styles.codeWrapper}>
            <code>
              {text}
            </code>
          </div>
          <ButtonDeprecated className={styles.button} type="button" size={ButtonSize.M} onClick={onCopy}>
            <IconDeprecated className={styles.copyIcon} Svg={CopyIcon} />
          </ButtonDeprecated>
        </pre>
      )}
      off={(
        <pre className={styles.containerV2}>
          <div className={styles.codeWrapper}>
            <code>
              {text}
            </code>
          </div>
          <Icon
            className={styles.copyIconV2}
            Svg={CopyIconNew}
            clickable
            onClick={onCopy}
            width={32}
            height={32}
          />
        </pre>
      )}
    />
  );
};
