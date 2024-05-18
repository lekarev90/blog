module.exports = (layer, componentName) => `import { Meta, StoryObj } from '@storybook/react';

import { ${componentName} } from './${componentName}';

export default {
    title: '${layer}/${componentName}',
    component: ${componentName},
    args: {},
} as Meta<typeof ${componentName}>;


export const Default: StoryObj<typeof ${componentName}> = {}`;
