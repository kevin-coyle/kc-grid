import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";
import "./kc-grid";

export default {
  title: "Grid",
  render: (args) =>
    html`<kc-grid
      ?debugMode="${args.debugMode}"
      variant=${args.variant}
      ?hasLayoutContainer=${args.hasLayoutContainer}
      >${args.children}</kc-grid
    >`,
} as Meta;

export const Default: StoryObj = {
  name: "One Column",
  args: {
    variant: "1",
    debugMode: false,
    hasLayoutContainer: true,
    children: html`<div>Column 1</div>`,
  },
};

export const ThreeCol: StoryObj = {
  name: "Three Columns",
  args: {
    variant: "1-3",
    debugMode: false,
    hasLayoutContainer: true,
    children: html`<div>Column 1</div>
      <div>Column 2</div>
      <div>Column 3</div>`,
  },
};

export const Two: StoryObj = {
  name: "Two Columns",
  args: {
    variant: "1-2",
    debugMode: false,
    hasLayoutContainer: true,
    children: html`<div>Column 1</div>
      <div>Column 2</div>`,
  },
};
