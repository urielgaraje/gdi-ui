import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Item } from '.';
import carImage from './../../../assets/cars/car.png';

const meta = {
  title: 'Components/Navigation/Item',
  component: Item,
  args: {

    carName: 'Car Name',
    tagText: 'Buy online',
    kind: 'HYBRID',
    description: 'Fuel | Range/Mileage | Car description',
    img: carImage,
    priceBefore: '£16,150.00',
    priceAfter: '£13,920.00',
    priceMonth: '£112.00',
    priceLicense: '£1000.00',
    priceTotal: '£14,920.00',
    
    onButtonClick: fn(),
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  args: {},
};
