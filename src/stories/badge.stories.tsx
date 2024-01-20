import React from "react";
import { Story, Meta } from "@storybook/react";
import Badge, { BadgeProps } from "./badge"; // Adjust the import path based on your project structure

export default {
  title: "Elements/Badge",
  component: Badge,
  argTypes: {
    color: {
      control: "select",
      options: [
        "gray",
        "red",
        "yellow",
        "green",
        "blue",
        "blue",
        "purple",
        "pink",
      ],
    },
    withDot: {
      control: "boolean",
    },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Badge",
  color: "gray",
};

export const RedBadge = Template.bind({});
RedBadge.args = {
  children: "Red Badge",
  color: "red",
};

export const BadgeWithDot = Template.bind({});
BadgeWithDot.args = {
  children: "Badge with Dot",
  color: "blue",
  withDot: true,
};

// Add more stories for other colors and variations as needed
