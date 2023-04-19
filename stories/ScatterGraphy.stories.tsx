import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ScatterGraphyProps } from '../lib/components/ScatterGraphy/type';
import { ScatterGraphy } from '../lib/index';

const meta: Meta<typeof ScatterGraphy> = {
  title: 'Components/ScatterGraphy',
  component: ScatterGraphy,
};

export default meta;

type Story = StoryObj<typeof ScatterGraphy>;

export const Default: Story = {
  render: (args: ScatterGraphyProps) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%' }}>
        <ScatterGraphy {...args} />
      </div>
    </div>
  ),
  args: {
    src: '/stories/assets/ex.png',
    size: 5,
    duration: 500,
    color: 'black',
  },
};
