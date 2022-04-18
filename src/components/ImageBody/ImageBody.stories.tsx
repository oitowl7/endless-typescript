import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ImageBody, Props } from './ImageBody';

const meta: Meta = {
  component: ImageBody,
  title: 'Components/ImageBody',
}

export default meta;

const Template: Story<Props> = args => <ImageBody {...args} />;

export const Default = Template.bind({});
Default.args = {
};