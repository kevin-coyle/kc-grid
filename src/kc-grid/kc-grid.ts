import { LitElement, css, unsafeCSS, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import styles from "./kc-grid.css";
@customElement("kc-grid")
export class KcGrid extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;
  @property()
  variant: "1" | "1-3" | "1-4" | "1-2" = "1";

  private classes = {
    "kc-grid": true,
    [`kc-grid--${this.variant}`]: true,
  };

  render() {
    return html`
      <div class="${classMap(this.classes)}">
        <slot></slot>
      </div>
    `;
  }
}
