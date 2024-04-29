import type { Meta, StoryObj } from '@storybook/react';
import AboutMe from '@/components/AboutMe';

const meta: Meta<typeof AboutMe> = {
    component: AboutMe,
    title: 'AboutMe'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {

    }
}