import type { Meta, StoryObj } from '@storybook/nextjs';
import { NavBarBase } from '@/components/Navigation/Base';
import { NavBarGlass } from '@/components/Navigation/Glass';

const meta: Meta = {
  title: "NavBar",
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: () => <NavBarBase />
}

export const Glass: Story = {
    render: () => <NavBarGlass />
}