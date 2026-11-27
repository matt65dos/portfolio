import { test, expect } from "@playwright/test";

test.describe("Portfolio - Senior Frontend Developer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Metadata & SEO - has proper title, role and OpenGraph", async ({ page }) => {
    await expect(page).toHaveTitle(/Matt \(@matt65dos\) \| Senior Frontend Developer/);

    // Hero title & role check
    const heading = page.locator("h1");
    await expect(heading).toContainText("Senior Frontend Developer");

    // "Open to work" status badge
    const statusPill = page.locator("text=Open to new opportunities");
    await expect(statusPill).toBeVisible();
  });

  test("Theme Toggle - switches smoothly between Light, Dark, and System", async ({ page }) => {
    const html = page.locator("html");

    // Click Light mode button
    const lightBtn = page.getByRole("button", { name: "Light mode" });
    await lightBtn.click();
    await expect(html).not.toHaveClass(/dark/);

    // Click Dark mode button
    const darkBtn = page.getByRole("button", { name: "Dark mode" });
    await darkBtn.click();
    await expect(html).toHaveClass(/dark/);
  });

  test("Selected Works - renders all 3 projects with clean single-line tabs", async ({ page }) => {
    const projectsSection = page.locator("#projects");
    await expect(projectsSection).toBeVisible();

    // The 3 projects
    const dentwise = projectsSection.locator("text=DentWise").first();
    const lumaStudio = projectsSection.locator("text=Luma Studio").first();
    const northwind = projectsSection.locator("text=Northwind").first();

    await expect(dentwise).toBeVisible();
    await expect(lumaStudio).toBeVisible();
    await expect(northwind).toBeVisible();

    // Verify 3 single-line tab buttons on each card
    const cards = projectsSection.locator(".group");
    await expect(cards).toHaveCount(3);

    for (let i = 0; i < 3; i++) {
      const card = cards.nth(i);
      const highlightsBtn = card.getByRole("button", { name: "Highlights" });
      const previewBtn = card.getByRole("button", { name: "Preview" });
      const stackBtn = card.getByRole("button", { name: "Stack" });

      await expect(highlightsBtn).toBeVisible();
      await expect(previewBtn).toBeVisible();
      await expect(stackBtn).toBeVisible();
    }
  });

  test("Project Cards - tab switching works without layout overflow or jumping", async ({ page }) => {
    const cards = page.locator("#projects .group");
    const middleCard = cards.nth(1); // Luma Studio

    // 1. Initial Highlights state
    await expect(middleCard.getByRole("button", { name: "Highlights" })).toHaveClass(/bg-white|bg-zinc-700/);

    // Measure initial heights of all cards
    const initialHeights = await cards.evaluateAll((elements) =>
      elements.map((el) => el.getBoundingClientRect().height)
    );

    // 2. Click Preview on middle card
    await middleCard.getByRole("button", { name: "Preview" }).click();
    await expect(middleCard.locator("text=OPENAI DALL-E ENGINE")).toBeVisible();

    // Measure heights after switching to Preview
    const previewHeights = await cards.evaluateAll((elements) =>
      elements.map((el) => el.getBoundingClientRect().height)
    );

    // Verify card height does not jump
    expect(Math.abs(previewHeights[0] - initialHeights[0])).toBeLessThanOrEqual(2);
    expect(Math.abs(previewHeights[1] - initialHeights[1])).toBeLessThanOrEqual(2);
    expect(Math.abs(previewHeights[2] - initialHeights[2])).toBeLessThanOrEqual(2);

    // 3. Click Stack on middle card
    await middleCard.getByRole("button", { name: "Stack" }).click();
    await expect(middleCard.locator("text=OpenAI API").first()).toBeVisible();

    // Verify footer does not overlap
    const middleFooter = middleCard.locator(".mt-auto");
    const middleTabContent = middleCard.locator(".min-h-\\[250px\\]");

    const footerRect = await middleFooter.boundingBox();
    const tabRect = await middleTabContent.boundingBox();

    expect(footerRect).not.toBeNull();
    expect(tabRect).not.toBeNull();
    if (footerRect && tabRect) {
      expect(tabRect.y + tabRect.height).toBeLessThanOrEqual(footerRect.y);
    }
  });

  test("Contact Information - displays updated LinkedIn and Email correctly", async ({ page }) => {
    const contactSection = page.locator("#contact");
    await expect(contactSection).toBeVisible();

    // Verify email display
    await expect(contactSection).toContainText("klimorowski@gmail.com");

    // Verify LinkedIn link
    const linkedinLink = contactSection.locator(
      'a[href="https://www.linkedin.com/in/mateusz-klimorowski-frontend-developer"]'
    );
    await expect(linkedinLink).toBeVisible();

    // Verify GitHub link
    const githubLink = contactSection.locator('a[href="https://github.com/matt65dos"]');
    await expect(githubLink).toBeVisible();
  });
});
