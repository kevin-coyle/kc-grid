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

  @property({ type: Number })
  smallMobileBreakpoint = 320;

  @property({ type: Number })
  mobileBreakpoint = 480;

  @property({ type: Number })
  tabletBreakpoint = 768;

  @property({ type: Number })
  desktopBreakpoint = 1024;

  @property({ type: Number })
  largeDesktopBreakpoint = 1280;

  @property({ type: Boolean })
  hasLayoutContainer = false;

  private classes = {
    "kc-grid": true,
    [`kc-grid--${this.variant}`]: true,
    "kc-grid--has-layout-container": this.hasLayoutContainer,
  };

  render() {
    return html`
      <div class="${classMap(this.classes)}">
        <slot></slot>
      </div>
    `;
  }
}
