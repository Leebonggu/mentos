import { ComponentStory, ComponentMeta } from '@storybook/react';
import Logo from '@/components/atom/Logo';

export default {
  title: 'Atom/Logo',
  component: Logo,
  args: {
    isSticky: true,
    isHome: true,
  }
} as ComponentMeta<typeof Logo>

export const ConditionalLogo: ComponentStory<typeof Logo> = (args) => <Logo {...args} />
