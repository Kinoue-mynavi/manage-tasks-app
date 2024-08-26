/* eslint-disable @typescript-eslint/no-use-before-define */
import type { Meta, StoryObj } from '@storybook/react';
import { CSSProperties } from 'react';

import { color, Color } from '@/theme/color';
import { space } from '@/theme/space';

const COLORS = Object.keys(color) as Color[];

const ColorPalette: React.FC = () => {
  return (
    <ul style={ul}>
      {COLORS.map((c) => (
        <li key={c} style={li}>
          <p style={p}>
            {c} ( <span style={span}>{color[c]}</span> )
          </p>
          <div style={{ ...div, backgroundColor: color[c] }} />
        </li>
      ))}
    </ul>
  );
};

const meta = {
  component: ColorPalette,
} satisfies Meta<typeof ColorPalette>;

export default meta;

export const Palette: StoryObj<typeof meta> = {
  args: {},
};

const ul: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: space.l,
};

const li: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: space.m,
};

const p: CSSProperties = {
  fontSize: 14,
};

const span: CSSProperties = {
  backgroundColor: color.lightGray,
  borderRadius: 4,
  paddingInline: space.xs,
  paddingBlock: space.xxs,
  fontSize: 12,
};

const div: CSSProperties = {
  border: `dotted 2px gray`,
  borderRadius: 6,
  width: 200,
  height: 32,
};
