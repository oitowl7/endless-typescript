import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ImageBody, Props } from './ImageBody';

const meta: Meta = {
  component: ImageBody,
  title: 'Components/ImageBody',
  argTypes: {
    url: {
      description: 'The external url to use for the ImageBody. Will override the default if passed.'
    },
    maxHeight: {
      description: 'Number value of the max height of the image in pixels. Defaults to 20.'
    }
  }
}

export default meta;

const Template: Story<Props> = args => <ImageBody {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Children =  Template.bind({});
Children.args = {
  ...Default.args,
  children: <div><div>Other stuff</div><button>Does nothing</button></div>
};
