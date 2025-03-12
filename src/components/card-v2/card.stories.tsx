import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { CardV2 } from '.';
import canImage from './../../assets/can.png';

const meta = {
  title: 'Components/CardV2',
  component: CardV2,
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
} satisfies Meta<typeof CardV2>;

export default meta;
type Story = StoryObj<typeof CardV2>;

export const Default: Story = {
  args: {},
};
