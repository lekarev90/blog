import { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  args: {
    text: '<pre className={cx(styles.container, className)}>\n'
      + '      <div className={styles.codeWrapper}>\n'
      + '        <code>\n'
      + '          {text}\n'
      + '        </code>\n'
      + '      </div>\n'
      + '      <Button\n'
      + '        className={styles.button}\n'
      + '        type="button"\n'
      + '        size={ButtonSize.M}\n'
      + '        onClick={onCopy}\n'
      + '      >\n'
      + '        <Icon\n'
      + '          className={styles.copyIcon}\n'
      + '          Svg={CopyIcon}\n'
      + '        />\n'
      + '      </Button>\n'
      + '    </pre>',
  },
} as Meta<typeof Code>;

export const Default: StoryObj<typeof Code> = {};
