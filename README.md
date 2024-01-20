# 🌟 Tim's Components - Storybook Guide 🌟

Welcome to the Storybook for "Tim's Components"! 📘 Storybook is a powerful tool for developing and showcasing React components. This guide will help you get started with using Storybook to explore and test the components in "Tim's Components".

## 🚀 Getting Started

Before you begin, make sure you have [Node.js](https://nodejs.org/) installed on your system. This will include npm, which is necessary to install dependencies and run scripts.

### 📦 Installation

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/timothyosm/tims-components
cd tims-components
npm install
```

### 🎬 Running Storybook

To start Storybook, run the following command in the project directory:

```bash
npm run storybook
```

This command will start the Storybook server. Once it's up and running, your default web browser should automatically open a new tab pointing to `http://localhost:6006`. If it doesn't, you can manually open this URL in your browser to view the Storybook.

## 🔍 Exploring Components

In Storybook, each component has its own "story" which showcases the different states and variants of the component. You can browse through the list of components in the sidebar. Click on a component to view its stories.

For each story, you can:

- See the rendered component in various states.
- View the source code that renders the component.
- Modify the props dynamically using the controls panel.

## ✍️ Creating New Stories

To create a new story for a component:

1. Add a new file in the component's directory named `ComponentName.stories.tsx`.
2. Use the Storybook syntax to define the story. Here's a basic template:

```tsx
import React from "react";
import { Story, Meta } from "@storybook/react";
import YourComponent from "./YourComponent";

export default {
  title: "YourComponent",
  component: YourComponent,
} as Meta;

const Template: Story<YourComponentProps> = (args) => (
  <YourComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  // Your props here
};
```

Replace `YourComponent` and `YourComponentProps` with the actual component name and its props type.

## 📚 Additional Resources

- [Storybook Official Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [React Documentation](https://reactjs.org/)

## 🤝 Contributing

Contributions to "Tim's Components" are always welcome. Whether it's adding new components, improving existing ones, or writing more stories, your help is appreciated.
