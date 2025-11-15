import { Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.item-4-title-link');
  }

  async verifyIsOnProductsPage() {
    await this.title.waitFor();
  }
}
