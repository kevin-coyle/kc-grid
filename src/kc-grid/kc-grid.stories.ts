import { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";
import "./kc-grid";

export default {
  title: "Grid",
  render: (args) =>
    html`<kc-grid variant=${args.variant}><div>Hi</div></kc-grid>`,
} as Meta;

export const Default: StoryObj = {
  name: "Default",
  args: {
    variant: "1",
  },
};
