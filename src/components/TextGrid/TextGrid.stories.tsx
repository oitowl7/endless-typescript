import React from 'react';
import { Meta, Story } from '@storybook/react';

import { TextGrid, Props } from './TextGrid';

const meta: Meta = {
  component: TextGrid,
  title: 'Components/TextGrid',
}

export default meta;

const Template: Story<Props> = args => <TextGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
};
