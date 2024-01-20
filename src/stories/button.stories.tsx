import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./button";

export default {
  title: "Elements/Button",
  component: Button,
  argTypes: {
    type: {
      control: { type: "select", options: ["primary", "secondary", "soft"] },
    },
    size: {
      control: { type: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    },
    rounded: {
      control: { type: "boolean" },
    },
    isIconOnly: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: "Secondary Button",
};

export const Soft = Template.bind({});
Soft.args = {
  type: "soft",
  children: "Soft Button",
};

export const Rounded = Template.bind({});
Rounded.args = {
  type: "primary",
  rounded: true,
  children: "rounded Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "primary",
  disabled: true,
  children: "Disabled Button",
};
