import type { Preview } from "@storybook/react";
import "../src/index.css";

// Replace your-framework with the framework you are using (e.g., react, vue3)

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "light",
          value: "#fafaf9",
        },
        {
          name: "dark",
          value: "#18181b",
        },
      ],
    },
  },
};

export default preview;
