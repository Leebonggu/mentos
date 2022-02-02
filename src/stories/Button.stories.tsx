import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '@/components/atom/Button';

export default {
  title: 'Atom/Button',
  component: Button,
  args: {
    disabled: false,
    children: '버튼',
    pl: 0,
    pt: 0,
    pr: 0,
    pb: 0,
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button>  = (args) => <Button {...args} />
export const Default = Template.bind({});