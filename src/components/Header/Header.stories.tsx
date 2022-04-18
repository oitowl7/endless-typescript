import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Header, Props } from './Header';

const meta: Meta = {
  component: Header,
  title: 'Components/Header',
  argTypes: {
    imageUrl: {
      description: 'The external Url to use for the header. Will override the default if passed.'
    },
    maxHeight: {
      description: 'Number value of the max height of the image in pixels. Defaults to 20.'
    }
  }
}

export default meta;

const Template: Story<Props> = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxHeight: 20,
};

export const ImageUrl =  Template.bind({});
ImageUrl.args = {
  ...Default.args,
  imageUrl: 'https://www.singlestoneconsulting.com/wp-content/uploads/2019/10/logo_primary-1.svg'
};

export const LinkUrl =  Template.bind({});
LinkUrl.args = {
  ...Default.args,
  linkUrl: "https://www.dictionary.com/browse/endless"
};
