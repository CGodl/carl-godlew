import type { Meta, StoryObj } from '@storybook/react';
import { ImageBox } from '@/components/ImageBox';

const meta: Meta<typeof ImageBox> = {
    component: ImageBox,
    title: 'ImageBox',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        src: '/spainForgot.jpg',
        alt: 'Travel photo from Spain',
        caption: 'Exploring Spain',
    },
    render: (args) => (
        <div className="relative w-64 h-48">
            <ImageBox {...args} />
        </div>
    ),
};
