import type { Meta, StoryObj } from '@storybook/nextjs';
import { NavBar } from '@/components/Navigation';

const meta: Meta<typeof NavBar> = {
    component: NavBar,
    title: 'Navigation'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {

    }
}