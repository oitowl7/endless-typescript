import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Footer } from './Footer';

const meta: Meta = {
  component: Footer,
  title: 'Components/Footer',
}

export default meta;

const Template: Story = args => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxHeight: 20,
};