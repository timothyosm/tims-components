// alert.stories.tsx

import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import Alert, { AlertProps } from "./alert"; // Import your Alert component here
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";

export default {
  title: "Overlays/Alert", // Define the story title and category
  component: Alert,
} as Meta;

// Create a template for your Alert component
const Template: Story<AlertProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true); // Use state to control the visibility of the alert

  return (
    <div>
      <Alert {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <button onClick={() => setIsOpen(true)}>Show Alert</button>
    </div>
  );
};
export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  icon: <CheckCircleIcon />, // Use CheckCircleIcon from Hero Icons
  iconColor: "text-green-500",
  dialogTitle: "Success",
  dialogContent: "This is a success alert.",
  primaryButtonText: "OK",
  secondaryButtonText: "Cancel",
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  icon: <XCircleIcon />, // Use XCircleIcon from Hero Icons
  iconColor: "text-red-500",
  dialogTitle: "Error",
  dialogContent: "This is an error alert.",
  primaryButtonText: "Retry",
  secondaryButtonText: "Dismiss",
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  icon: <ExclamationTriangleIcon />, // Use ExclamationIcon from Hero Icons
  iconColor: "text-yellow-500",
  dialogTitle: "Warning",
  dialogContent: "This is a warning alert.",
  primaryButtonText: "Acknowledge",
  secondaryButtonText: "Ignore",
};
