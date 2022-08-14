import { screen } from "shadow-dom-testing-library";
import userEvent from "@testing-library/user-event";

import "./index.ts";

describe("<lit-counter>", () => {
  test("Should start with initial count", async () => {
    document.body.innerHTML = `<lit-counter count="10"></lit-counter>`;
    await expect(await screen.findByShadowText("10")).toBeInTheDocument;
  });

  test("Should increase by one", async () => {
    document.body.innerHTML = `<lit-counter count="0"></lit-counter>`;
    const increase = await screen.findByShadowLabelText("Increase");
    userEvent.click(increase);
    await expect(await screen.findByShadowText("1")).toBeInTheDocument;
    userEvent.click(increase);
    await expect(await screen.findByShadowText("2")).toBeInTheDocument;
  });

  test("Should decrease by one", async () => {
    document.body.innerHTML = `<lit-counter count="10"></lit-counter>`;
    const decrease = await screen.findByShadowLabelText("Decrease");
    userEvent.click(decrease);
    await expect(await screen.findByShadowText("9")).toBeInTheDocument;
    userEvent.click(decrease);
    await expect(await screen.findByShadowText("8")).toBeInTheDocument;
  });

  test("Should not decrease below 0", async () => {
    document.body.innerHTML = `<lit-counter count="0"></lit-counter>`;
    const decrease = await screen.findByShadowLabelText("Decrease");
    userEvent.click(decrease);
    await expect(await screen.findByShadowText("0")).toBeInTheDocument;
  });
});
