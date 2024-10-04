import type { Meta, StoryObj } from '@storybook/react';
import {Button} from './Button';

const meta: Meta<typeof Button> = {
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Click Me',
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true,
    },
};
