---
name: 'ui/stories'
root: 'src'
output: '.'
questions:
  name: 'Please enter a component name.'
  directory:
    message: 'Select a directory ?'
    multiple: false
    choices:
      - 'atoms'
      - 'modules'
    initial: ['atoms']
---

# `ui/{{ inputs.directory }}/{{ inputs.name | pascal }}/index.stories.tsx`

```typescript
import { Meta, StoryObj } from '@storybook/react';

import { {{ inputs.name | pascal }} } from '.';

const meta = {
  component: {{ inputs.name | pascal }},
} satisfies Meta<typeof {{ inputs.name | pascal }}>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};

```
