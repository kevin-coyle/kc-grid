import { LitElement, css, unsafeCSS, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import styles from "./kc-grid.css";
import "construct-style-sheets-polyfill";
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

  @property({ type: Boolean })
  debugMode = false;

  private sheet: CSSStyleSheet;

  updated() {
    this.generateStyles();
  }
  connectedCallback() {
    super.connectedCallback();
    this.sheet = new CSSStyleSheet();
    this.generateStyles();
    const shadow = this.shadowRoot;
    if (shadow) {
      shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, this.sheet];
    }
  }

  private getClasses = () => {
    return {
      "kc-grid": true,
      [`kc-grid--has-layout-container`]: this.hasLayoutContainer,
      [`kc-grid--debug`]: this.debugMode,
      [`kc-grid--${this.variant}`]: true,
    };
  };

  private generateStyles() {
    this.sheet.replaceSync(`
      .kc-grid--has-layout-container{
        width: 100%;
        margin: 0 auto;
      }

      @media (min-width: ${this.desktopBreakpoint}px) {
        .kc-grid--has-layout-container{
          width: ${this.desktopBreakpoint}px;
        }
      }

      @media (min-width: ${this.largeDesktopBreakpoint}px) {
        .kc-grid--has-layout-container{
          width: ${this.largeDesktopBreakpoint}px;
        }
      }
      .kc-grid--1 {
        grid-template-columns: 1fr;
      }

      @media (min-width: ${this.desktopBreakpoint}px) {
        .kc-grid--1-2 {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media (min-width: ${this.desktopBreakpoint}px) {
        .kc-grid--1-3 {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (min-width: ${this.desktopBreakpoint}px) {
        .kc-grid--1-4 {
          grid-template-columns: repeat(4, 1fr);
        }
      }


    `);
  }

  render() {
    return html`
      <div class="${classMap(this.getClasses())}" part="grid">
        <slot></slot>
      </div>
    `;
  }
}
