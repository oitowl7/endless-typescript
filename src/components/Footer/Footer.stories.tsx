import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Footer } from './Footer';

const meta: Meta = {
  component: Footer,
  title: 'Components/Footer',
  argTypes: {
    url: {
      description: 'The external url to use for the Footer. Will override the default if passed.'
    },
    maxHeight: {
      description: 'Number value of the max height of the image in pixels. Defaults to 20.'
    }
  }
}

export default meta;

const Template: Story = args => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxHeight: 20,
};

export const Override =  Template.bind({});
Override.args = {
  ...Default.args,
  url: 'https://www.singlestoneconsulting.com/wp-content/uploads/2019/10/logo_primary-1.svg'
};
