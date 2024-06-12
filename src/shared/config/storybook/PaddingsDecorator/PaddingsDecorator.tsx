import React from 'react';

import { StoryFn } from '@storybook/react';

import styles from './PaddingsDecorator.module.scss';

export const PaddingsDecorator = (Story: StoryFn) => (
  <div className={styles.container}>
    <Story />
  </div>
);
