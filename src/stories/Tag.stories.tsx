import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from '@components/atom/Tag'

export default {
  title: 'Mentos/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />
export const Main = Template.bind({});
Main.args = {
  children: 'main',
  bgColor: 'primary',
  fontColor: 'white'
}
export const Sub = Template.bind({});
Sub.args = {
  children: 'Sub',
  bgColor: 'secondary',
  fontColor: 'white'
}

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  bgColor: 'default',
  fontColor: 'black'
}