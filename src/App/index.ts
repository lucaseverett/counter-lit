import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import cssReset from "../css-reset.js";
import "../styles.css";
import "../Counter/index.ts";

@customElement("my-app")
export class App extends LitElement {
  static styles = [
    cssReset,
    css`
      :host {
        height: 100%;
        display: grid;
        place-items: center;
        background-color: #cbd5e1;
      }
    `,
  ];

  render() {
    return html`<lit-counter .count=${0}></lit-counter>`;
  }
}
