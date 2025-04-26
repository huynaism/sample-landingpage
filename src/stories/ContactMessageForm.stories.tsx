import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContactMessageForm from '../components/input/ContactMessageForm';

export default {
  title: 'Components/Input/ContactMessageForm',
  component: ContactMessageForm,
} as ComponentMeta<typeof ContactMessageForm>;

const Template: ComponentStory<typeof ContactMessageForm> = (args) => (
  <ContactMessageForm {...args} />
);

export const Default = Template.bind({});
