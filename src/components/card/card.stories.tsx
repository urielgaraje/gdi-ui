import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';
import canImage from './../../assets/can.png';

const meta = {
  title: 'Components/Card',
  component: Card,
  args: {
    img: canImage,
    city: 'New York',
    productName: 'Lemon',
    description: 'Available in',
    price: '$2.99',
    buttonText: 'Add to cart',
    onButtonClick: fn(),
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
