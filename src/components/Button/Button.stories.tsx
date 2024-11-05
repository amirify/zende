import type { Meta, StoryObj } from "@storybook/react";
import { StoryContainer } from "../StoryContainer";
import { useState } from "react";
import { Button } from "./Button";
import { ButtonProps, ButtonVariant } from "./Button.types";
import { LoadingIcon } from "../Icons/LoadingIcon";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  includeStories: /^[A-Z]/,
  argTypes: {
    onClick: { action: "clicked" },
  },
  decorators: [
    (Story) => {
      return (
        <StoryContainer>
          <Story />
        </StoryContainer>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<ButtonProps>;

// Generic helper function to generate variant-based button stories
const createVariantStory = <K extends keyof ButtonProps>(
  variantProp: K,
  value: ButtonProps[K],
  label: string,
): Story => ({
  args: { [variantProp]: value },
  render: (args) => (
    <>
      <Button {...args} variant="solid">
        {label}
      </Button>
      <Button {...args} variant="outlined">
        {label}
      </Button>
      <Button {...args} variant="text">
        {label}
      </Button>
    </>
  ),
});

// Default story
export const Default: Story = {
  args: {
    children: "Default Button",
  },
};

// Variants
export const SolidVariant: Story = {
  args: {
    children: "Solid Button",
    variant: "solid",
  },
};

export const OutlinedVariant: Story = {
  args: {
    children: "Outlined Button",
    variant: "outlined",
  },
};

export const TextVariant: Story = {
  args: {
    children: "Text Button",
    variant: "text",
  },
};

// Sizes
export const SmallSize = createVariantStory("size", "small", "Small Button");
export const MediumSize = createVariantStory("size", "medium", "Medium Button");
export const LargeSize = createVariantStory("size", "large", "Large Button");

// Radii
export const NoRadius = createVariantStory("radius", "none", "No Radius");
export const SmallRadius = createVariantStory("radius", "sm", "Small Radius");
export const MediumRadius = createVariantStory("radius", "md", "Medium Radius");
export const LargeRadius = createVariantStory("radius", "lg", "Large Radius");
export const PillRadius = createVariantStory("radius", "pill", "Pill Radius");
export const CircleRadius = createVariantStory("radius", "circle", "Circle");

// Block
export const BlockButton = createVariantStory("block", true, "Block Button");

// Disabled
export const DisabledButton = createVariantStory(
  "disabled",
  true,
  "Disabled Button",
);

// Icon position
export const IconAtStart: Story = {
  args: {
    children: "Icon Start",
    icon: <LoadingIcon margin="right" />,
    iconPosition: "start",
  },
  render: (args) => (
    <>
      {(["solid", "outlined", "text"] as ButtonVariant[]).map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {args.children}
        </Button>
      ))}
    </>
  ),
};

export const IconAtEnd: Story = {
  args: {
    children: "Icon End",
    icon: <LoadingIcon margin="left" />,
    iconPosition: "end",
  },
  render: (args) => (
    <>
      {(["solid", "outlined", "text"] as ButtonVariant[]).map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {args.children}
        </Button>
      ))}
    </>
  ),
};

export const LoadingState: Story = (args: ButtonProps) => {
  const [showLoading, setShowLoading] = useState(args.showLoading);

  return (
    <>
      {(["solid", "outlined", "text"] as ButtonVariant[]).map((variant) => (
        <Button
          {...args}
          key={variant}
          showLoading={showLoading}
          variant={variant}
          onClick={() => setShowLoading(!showLoading)}
        >
          {args.children}
        </Button>
      ))}
    </>
  );
};

// Default args for the story
LoadingState.args = {
  children: "Toggle Loading",
  showLoading: false,
};
