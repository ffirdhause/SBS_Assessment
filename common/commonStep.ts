import { Page } from '@playwright/test';


export  class CommonStep {
    readonly page: Page;
 
    constructor(page: Page) {
        
      this.page = page;
    }

    // Launch URL
    public async goToURL(url: string) {
        await this.page.goto(url);

    }
 
}