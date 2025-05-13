import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '.';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  args: {
    orientation: 'column',
    eyeblow: 'Configure',
    title: 'Heading',
    description: '1-2 sentences to explain that to find out more about our bold accessories, users can explore the options and grades in Aphelia.',
    buttonText: 'Configure',
    onButtonClick: fn(),
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {},
};
