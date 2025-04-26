import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/input/Button';

export default {
  title: 'Components/Input/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `Width of the button is 100%. this example sets the width to 200px.`,
      },
    },
  },
  args: {
    children: 'Label',
    onClick: undefined,
  },
  argTypes: {
    width: {
      type: 'number',
      defaultValue: 200,
      description:
        'A width of parent element. this property is used for resizing the element.',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ width, ...args }: any) => (
  <div style={{ width }}>
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};

Default.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const PrimaryInverse = Template.bind({});
PrimaryInverse.args = {
  type: 'primary-inverse',
};
