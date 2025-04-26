import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  faServer,
  faDesktop,
  faAddressCard,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import Card from '../components/input/Card';

export default {
  title: 'Components/Input/Card',
  component: Card,
  args: {
    icon: 'faServer',
  },
  argTypes: {
    width: {
      type: 'number',
      defaultValue: 200,
      description:
        'A width of parent element. this property is used for resizing the element.',
    },
    icon: {
      options: ['faServer', 'faDesktop', 'faAddressCard', 'faHome'],
      mapping: {
        faServer,
        faDesktop,
        faAddressCard,
        faHome,
      },
      description: 'Fortawesome icons. a few icons are provided as examples.',
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ width, ...args }: any) => (
  <div style={{ width }}>
    <Card {...args} />
  </div>
);

export const Empty = Template.bind({});

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  description: 'Description',
  href: 'https://google.com/',
};
