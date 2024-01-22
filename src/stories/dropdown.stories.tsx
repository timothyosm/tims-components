import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  PencilIcon,
  DocumentPlusIcon,
  ArchiveBoxIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import Dropdown from "./dropdown";

interface ReusableDropdownStoryProps {
  items: {
    label: string;
    icon?: React.ElementType;
    onClick?: () => void;
    divider?: boolean;
    header?: string;
  }[];
  renderItem: (item: any, active: boolean) => React.ReactNode;
  buttonContent?: React.ReactNode;
}

export default {
  title: "Elements/Dropdown",
  component: Dropdown,
} as Meta;

const Template: Story<ReusableDropdownStoryProps> = (args) => (
  <Dropdown {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  items: [
    { label: "Account settings" },
    { label: "Support" },
    { label: "License" },
  ],
  renderItem: (item, active) => (
    <span
      className={`block px-4 py-2 text-sm ${
        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
      }`}
    >
      {item.label}
    </span>
  ),
};

export const WithDividers = Template.bind({});
WithDividers.args = {
  items: [
    { label: "Edit", onClick: () => console.log("Edit") },
    {
      label: "Duplicate",
      onClick: () => console.log("Duplicate"),
      divider: true,
    },
    { label: "Archive", onClick: () => console.log("Archive") },
    { label: "Move", onClick: () => console.log("Move"), divider: true },
    { label: "Delete", onClick: () => console.log("Delete") },
  ],
  renderItem: (item, active) => (
    <span
      className={`block px-4 py-2 text-sm ${
        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
      }`}
    >
      {item.label}
    </span>
  ),
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  items: [
    { label: "Edit", icon: PencilIcon },
    { label: "Duplicate", icon: DocumentPlusIcon },
    { label: "Archive", icon: ArchiveBoxIcon },
    { label: "Delete", icon: TrashIcon },
  ],
  renderItem: (item, active) => (
    <span
      className={`group flex items-center px-4 py-2 text-sm ${
        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
      }`}
    >
      <item.icon
        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
        aria-hidden="true"
      />
      {item.label}
    </span>
  ),
};

export const CustomButtonContent = Template.bind({});
CustomButtonContent.args = {
  buttonContent: <span>Custom Button</span>,
  items: [
    { label: "Account settings" },
    { label: "Support" },
    { label: "License" },
  ],
  renderItem: (item, active) => (
    <span
      className={`block px-4 py-2 text-sm ${
        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
      }`}
    >
      {item.label}
    </span>
  ),
};
