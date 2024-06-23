import { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

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
  decorators: [NewDesignDecorator(false)],
} as Meta<typeof Code>;

export const Default: StoryObj<typeof Code> = {};
