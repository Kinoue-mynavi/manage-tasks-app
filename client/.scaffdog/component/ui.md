---
name: 'ui'
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
  story:
    confirm: 'Do you need a story?'
    initial: true
---

# `ui/{{ inputs.directory }}/{{ inputs.name | pascal }}/index.tsx`

```typescript
import React from 'react';

import { styles } from './style.css';

type Props = {
  children: React.ReactNode;
};

export const {{ inputs.name | pascal }}: React.FC<Props> = React.memo(({ children }) => {
  return <div className={styles}>{children}</div>;
});

```

# `ui/{{ inputs.directory }}/{{ inputs.name | pascal }}/style.css.ts`

```typescript
import { style } from '@vanilla-extract/css';

export const styles = style({});
```

# `ui/{{ inputs.directory }}/{{ !inputs.story && '!' }}{{ inputs.name | pascal }}/index.stories.tsx`

```typescript
import type { Meta, StoryObj } from '@storybook/react';

import { {{ inputs.name | pascal }} } from '.';

const meta = {
  component: {{ inputs.name | pascal }},
} satisfies Meta<typeof {{ inputs.name | pascal }}>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {},
};

```
