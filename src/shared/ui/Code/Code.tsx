import { useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';

import { Button, ButtonSize } from '../Button/Button';
import { Icon } from '../Icon/Icon';

import styles from './Code.module.scss';

interface CodeProps {
  text: string;
}

export const Code = ({
  text,
}: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={styles.container}>
      <div className={styles.codeWrapper}>
        <code>
          {text}
        </code>
      </div>
      <Button
        className={styles.button}
        type="button"
        size={ButtonSize.M}
        onClick={onCopy}
      >
        <Icon
          className={styles.copyIcon}
          Svg={CopyIcon}
        />
      </Button>
    </pre>
  );
};
