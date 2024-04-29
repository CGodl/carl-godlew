import type { Meta, StoryObj } from '@storybook/react';
import ImageBox from '@/components/ImageBox';

const meta: Meta<typeof ImageBox> = {
    component: ImageBox,
    title: 'ImageBox'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {

    }
}