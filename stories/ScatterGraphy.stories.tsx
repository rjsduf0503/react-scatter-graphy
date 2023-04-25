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
    src: '/stories/assets/horizontal.png',
    size: 1,
    duration: 500,
    color: 'black',
  },
};

export const Kakao: Story = {
  render: (args: ScatterGraphyProps) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%' }}>
        <ScatterGraphy {...args} />
      </div>
    </div>
  ),
  args: {
    src: '/stories/assets/kakao.png',
    size: 1,
    duration: 500,
    color: 'yellow',
  },
};

export const Vertical: Story = {
  render: (args: ScatterGraphyProps) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%' }}>
        <ScatterGraphy {...args} />
      </div>
    </div>
  ),
  args: {
    src: '/stories/assets/vertical.png',
    size: 1,
    duration: 500,
    color: 'black',
  },
};
