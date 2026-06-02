import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("");

  await expect(page.getByRole("list", { name: "Movie list" })).toBeVisible();

  await page.getByRole("textbox", { name: "Title" }).click();
  await page.getByRole("textbox", { name: "Title" }).fill("Movie");
  await page.getByRole("textbox", { name: "Description" }).click();
  await page
    .getByRole("textbox", { name: "Description" })
    .fill("Movie Description");
  await page.getByRole("button", { name: "Add movie" }).click();
  await expect(
    page
      .getByRole("listitem")
      .filter({ hasText: "MovieMovie DescriptionStatus" }),
  ).toBeVisible();
  await expect(
    page.getByLabel("Movie: Movie").getByText("Not watched"),
  ).toBeVisible();
  await page.getByRole("button", { name: "Mark Movie as watched" }).click();
  await expect(
    page.getByLabel("Movie: Movie").getByText("Watched", { exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Delete Movie" }).click();
  await expect(
    page
      .getByRole("listitem")
      .filter({ hasText: "MovieMovie DescriptionStatus" }),
  ).not.toBeVisible();
});
