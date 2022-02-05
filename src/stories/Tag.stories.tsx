import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from '@components/atom/Tag'

export default {
  title: 'Atom/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const TagTemplate: ComponentStory<typeof Tag> = (args) => <Tag {...args} />
export const Main = TagTemplate.bind({});
Main.args = {
  children: 'main',
  bgColor: 'primary',
  fontColor: 'white'
}
export const Sub = TagTemplate.bind({});
Sub.args = {
  children: 'Sub',
  bgColor: 'secondary',
  fontColor: 'white'
}

export const Default = TagTemplate.bind({});
Default.args = {
  children: 'Default',
  bgColor: 'default',
  fontColor: 'black'
}