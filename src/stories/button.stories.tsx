import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./button";
import { PencilIcon } from "@heroicons/react/20/solid";

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

export const Red = Template.bind({});
Red.args = {
  type: "red",
  children: "Red Button",
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  type: "primary",
  leadingIcon: () => <PencilIcon className="w-5 h-5" />,
  children: "leading icon",
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  type: "primary",
  trailingIcon: () => <PencilIcon className="w-5 h-5" />,
  children: "trailing icon",
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
