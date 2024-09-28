import { test, expect } from "@playwright/test";

test("has title and heading", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Total React/);
  await expect(
    page.getByRole("heading", { name: "Hello World!" })
  ).toBeVisible();
});
