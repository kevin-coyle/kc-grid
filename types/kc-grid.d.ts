import { LitElement } from "lit";
import "construct-style-sheets-polyfill";
export declare class KcGrid extends LitElement {
    static styles: import("lit").CSSResult;
    variant: "1" | "1-3" | "1-4" | "1-2";
    smallMobileBreakpoint: number;
    mobileBreakpoint: number;
    tabletBreakpoint: number;
    desktopBreakpoint: number;
    largeDesktopBreakpoint: number;
    hasLayoutContainer: boolean;
    debugMode: boolean;
    private sheet;
    updated(): void;
    connectedCallback(): void;
    private getClasses;
    private generateStyles;
    render(): import("lit-html").TemplateResult<1>;
}
