import { HorizontalImg, InstagramImg, KakaoImg, VerticalImg } from './assets/index';

import type { Meta, StoryObj } from '@storybook/react';

import { ScatterGraphyProps } from '@/components/ScatterGraphy/type';
import { ScatterGraphy } from '@/index';

const meta: Meta<typeof ScatterGraphy> = {
  title: 'Components/ScatterGraphy',
  component: ScatterGraphy,
};

export default meta;

type Story = StoryObj<typeof ScatterGraphy>;

export const Kakao: Story = {
  render: (args: ScatterGraphyProps) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%' }}>
        <ScatterGraphy {...args} />
      </div>
    </div>
  ),
  args: {
    src: KakaoImg,
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
    src: InstagramImg,
    size: 1,
    duration: 500,
    resizeDelay: 500,
  },
};

export const Horizontal: Story = {
  render: (args: ScatterGraphyProps) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%' }}>
        <ScatterGraphy {...args} />
      </div>
    </div>
  ),
  args: {
    src: HorizontalImg,
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
    src: VerticalImg,
    size: 1,
    duration: 500,
    resizeDelay: 500,
  },
};
