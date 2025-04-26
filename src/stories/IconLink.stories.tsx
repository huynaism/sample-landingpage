import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  faServer,
  faDesktop,
  faAddressCard,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import IconLink from '../components/input/IconLink';

export default {
  title: 'Components/Input/IconLink',
  component: IconLink,
  argTypes: {
    width: {
      type: 'number',
      defaultValue: 38,
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
} as ComponentMeta<typeof IconLink>;

const Template: ComponentStory<typeof IconLink> = ({ width, ...args }: any) => (
  <div style={{ width }}>
    <IconLink {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  icon: 'faServer',

  href: 'https://google.com/',
};
