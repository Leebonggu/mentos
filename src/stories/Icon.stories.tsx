import { ComponentMeta, ComponentStory} from '@storybook/react';
import Icon from '@/components/atom/Icon';
import { ArrowDownIcon } from '@/icons/ArrowDownIcon';
import { ArrowUpIcon } from '@/icons/ArrowUpIcon';
import { ArrowRightIcon } from '@/icons/ArrowRightIcon';
import { ArrowLeftIcon } from '@/icons/ArrowLeftIcon';

export default {
 title: 'Atom/Icon',
 component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const IconContainer = Template.bind({});
IconContainer.args = {
  children: <Icon />,
  bgColor: '#CDF3EA',
}

export const ArrowUp = Template.bind({});
ArrowUp.args = {
  children: <ArrowUpIcon />
}

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  children: <ArrowRightIcon />
}

export const ArrowDown = Template.bind({});
ArrowDown.args = {
  children: <ArrowDownIcon />
}

export const ArrowLeft = Template.bind({});
ArrowLeft.args = {
  children: <ArrowLeftIcon />
}
