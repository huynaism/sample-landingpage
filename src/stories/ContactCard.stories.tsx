import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContactCard from '../components/input/ContactCard';

export default {
  title: 'Components/Input/ContactCard',
  component: ContactCard,
  args: {
    value: 'Label',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    width: {
      type: 'number',
      defaultValue: 200,
      description:
        'A width of parent element. this property is used for resizing the element.',
    },
  },
} as ComponentMeta<typeof ContactCard>;

const Template: ComponentStory<typeof ContactCard> = ({
  width,
  ...args
}: any) => (
  <div style={{ width }}>
    <ContactCard {...args} />
  </div>
);

export const Phone = Template.bind({});
Phone.args = {
  type: 'phone',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
};

export const Address = Template.bind({});
Address.args = {
  type: 'address',
};
