import { ComponentMeta, ComponentStory} from '@storybook/react';
import Input from '@/components/atom/Input';

export default {
  title: 'Atom/Input',
  component: Input,
  args: {
    height: 'regular',
    placeholder: 'Input placeholder'
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />
export const Default = Template.bind({});