import type { Meta, StoryObj } from '@storybook/react';

import { ScatterGraphyProps } from '@/components/ScatterGraphy/type';
import { ScatterGraphy } from '@/index';

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
    src: '/horizontal.png',
    size: 1,
    duration: 500,
    resizeDelay: 500,
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
    src: '/vertical.png',
    size: 1,
    duration: 500,
    resizeDelay: 500,
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
    src: '/kakao.png',
    size: 1,
    duration: 500,
    resizeDelay: 500,
  },
};

export const Instagram: Story = {
  render: (args: ScatterGraphyProps) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%' }}>
        <ScatterGraphy {...args} />
      </div>
    </div>
  ),
  args: {
    src: '/instagram.png',
    size: 1,
    duration: 500,
    resizeDelay: 500,
  },
};
