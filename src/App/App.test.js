import { screen } from "shadow-dom-testing-library";

import "./index.ts";

describe("<my-app>", () => {
  test("Counter should start with 0", async () => {
    document.body.innerHTML = `<my-app></my-app>`;
    await expect(screen.findByShadowText("0")).toBeInTheDocument;
  });
});
