import type { Meta, StoryObj } from "@storybook/vue3";
import Button  from "./Button.vue";  

const meta = {
  title: "Tailwind & Shadcn-UI/Button",
  component: Button,
  // /** @type {'centered' | 'padded' | 'fullscreen'} */
  parameters: {
    
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The visual style of the button.",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button.",
    },
  },
  args: {
    default: "Click me",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Default Button Story
export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    default: "Default Button",
  },
};

// Destructive Button Story
export const Destructive: Story = {
  args: {
    variant: "destructive",
    default: "Destructive Button",
    size: 'lg'
  }
};

// // Outline Button Story
// export const Outline: Story = {
//   args: {
//     variant: "outline",
//     default: "Outline Button",
//   },
// };

// // Secondary Button Story
// export const Secondary: Story = {
//   args: {
//     variant: "secondary",
//     default: "Secondary Button",
//   },
// };

// // Ghost Button Story
// export const Ghost: Story = {
//   args: {
//     variant: "ghost",
//     default: "Ghost Button",
//   },
// };

// // Link Button Story
// export const Link: Story = {
//   args: {
//     variant: "link",
//     default: "Link Button",
//   },
// };

// Disabled Button Story
// export const Disabled: Story = {
//   args: {
//     children: "Disabled Button",
//     disabled: true,
//   },
// };