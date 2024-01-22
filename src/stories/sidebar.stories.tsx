import React from "react";
import { Meta, Story } from "@storybook/react";
import Sidebar, { SidebarProps } from "./sidebar"; // Make sure to adjust the import path
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
} from "@heroicons/react/20/solid";

export default {
  title: "Navigation/Sidebar",
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  navigation: [
    { name: "Dashboard", href: "#", icon: HomeIcon, count: "5", current: true },
    { name: "Team", href: "#", icon: UsersIcon, current: false },
    {
      name: "Projects",
      href: "#",
      icon: FolderIcon,
      count: "12",
      current: false,
    },
    {
      name: "Calendar",
      href: "#",
      icon: CalendarIcon,
      count: "20+",
      current: false,
    },
    {
      name: "Documents",
      href: "#",
      icon: DocumentDuplicateIcon,
      current: false,
    },
    { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
  ],
  teams: [
    { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
    { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
    { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
  ],
  profileImageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  profileName: "Tom Cook",
};

export const WithNoTeams = Template.bind({});
WithNoTeams.args = {
  navigation: [
    { name: "Dashboard", href: "#", icon: HomeIcon, count: "5", current: true },
    { name: "Team", href: "#", icon: UsersIcon, current: false },
    {
      name: "Projects",
      href: "#",
      icon: FolderIcon,
      count: "12",
      current: false,
    },
    {
      name: "Calendar",
      href: "#",
      icon: CalendarIcon,
      count: "20+",
      current: false,
    },
    {
      name: "Documents",
      href: "#",
      icon: DocumentDuplicateIcon,
      current: false,
    },
    { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
  ],
  teams: [], // Pass an empty array
  profileImageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  profileName: "Tom Cook",
};
