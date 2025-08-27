#!/usr/bin/env ts-node

///
// Demo of Playwright browser automation with TypeScript
// Converted from Playwright JavaScript to TypeScript
// Please see the file README.md for more information.
//
// ## Tracking
//
//   * Package: demo-playwright-typescript
//   * Version: 1.4.0
//   * Created: 2019-11-02T00:00:00Z
//   * Updated: 2025-04-24T13:58:02Z
//   * License: GPL-2.0-or-greater or for custom license contact us
//   * Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
///

// Import Playwright types and functions
import { chromium, Browser, BrowserContext, Page, Locator, ChromiumBrowser } from 'playwright';

// Import strict assert, renamed for convenience as assert
import { strict as assert } from 'assert';
assert(true);

async function demo(): Promise<void> {

    // Initialize browser with options similar to Selenium setup
    const browser: ChromiumBrowser = await chromium.launch({
        headless: false, // Set to true for headless mode
        args: [
            '--verbose', // Enable verbose logging
            '--disable-notifications', // Disable notifications such as popups
        ]
    });

    // Create a new context with preferences
    const context: BrowserContext = await browser.newContext({
        // Reject cookies (Playwright doesn't have direct cookie rejection, 
        // but you can clear cookies or use context isolation)
        acceptDownloads: false,
        // Additional context options can be set here
    });

    // Create a new page
    const page: Page = await context.newPage();

    try {
        // Navigate to a website
        await page.goto("https://testingexamples.github.io");

        ///
        // Find elements in various ways.
        // Note: Playwright uses locators which auto-wait and retry
        ///

        // Find an element by id.
        //
        // This demonstrates locator with id selector.
        //
        // Example HTML:
        //
        //      <p id="id-example-1">Lorem Ipsum</p>
        //
        const elementById: Locator = page.locator('#id-example-1');
        const outerHTMLById: string = await elementById.evaluate((el: Element): string => el.outerHTML);
        console.log(outerHTMLById);

        // Find an element by name attribute.
        //
        // This demonstrates locator with attribute selector.
        //
        // Example HTML:
        //
        //     <p name="name-example-1">Lorem Ipsum</p>
        //
        const elementByName: Locator = page.locator('[name="name-example-1"]');
        const outerHTMLByName: string = await elementByName.evaluate((el: Element): string => el.outerHTML);
        console.log(outerHTMLByName);

        // Find an element by class name.
        //
        // This demonstrates locator with class selector.
        //
        // Example HTML:
        //
        //     <p class="class-example-1">Lorem Ipsum</p>
        //
        const elementByClassName: Locator = page.locator('.class-example-1');
        const outerHTMLByClass: string = await elementByClassName.evaluate((el: Element): string => el.outerHTML);
        console.log(outerHTMLByClass);

        // Find an element that is a link by its text.
        //
        // This demonstrates locator with text selector.
        //
        // Example HTML:
        //
        //     <a href="https://example.com">Link Example 1</a>
        //
        const elementByLinkText: Locator = page.locator('a', { hasText: 'Link Example 1' });
        // Alternative: page.locator('text="Link Example 1"') for exact text
        const outerHTMLByLink: string = await elementByLinkText.evaluate((el: Element): string => el.outerHTML);
        console.log(outerHTMLByLink);

        // Find an element by XPath query.
        //
        // This demonstrates XPath selector.
        //
        // Example HTML:
        //
        //     <input type=submit>
        //
        const elementByXPath: Locator = page.locator('xpath=//input[@type="submit"]');
        const outerHTMLByXPath: string = await elementByXPath.evaluate((el: Element): string => el.outerHTML);
        console.log(outerHTMLByXPath);

        ///
        // Interact with form inputs in various ways.
        ///

        // Type in a text input.
        //
        // Example HTML:
        //
        //     <input type="text" id="text-example-1">
        //
        const text: Locator = page.locator('#text-example-1-id');
        const textOuterHTML: string = await text.evaluate((el: Element): string => el.outerHTML);
        console.log(textOuterHTML);
        await text.fill("hello");
        // Alternative: await text.type("hello") for character-by-character typing

        // Click a checkbox input.
        //
        // Example HTML:
        //
        //     <input type="checkbox" id="checkbox-example-1-id">
        //
        const checkbox: Locator = page.locator('#checkbox-example-1-id');
        const checkboxOuterHTML: string = await checkbox.evaluate((el: Element): string => el.outerHTML);
        console.log(checkboxOuterHTML);
        await checkbox.check();
        // Alternative: await checkbox.click() also works

        // Click a radio input.
        //
        // Example HTML:
        //
        //     <input type="radio" id="radio-example-1-id-option-1-id">
        //
        const radio: Locator = page.locator('#radio-example-1-option-1-id');
        const radioOuterHTML: string = await radio.evaluate((el: Element): string => el.outerHTML);
        console.log(radioOuterHTML);
        await radio.check();
        // Alternative: await radio.click() also works

        // Choose a select input option.
        //
        // Example HTML:
        //
        //     <select id="select-example-1-id">
        //       <option>alfa</option>
        //       <option>bravo</option>
        //       <option>charlie</option>
        //     </select>
        //
        const selectElement: Locator = page.locator('#select-example-1-id');
        const selectOuterHTML: string = await selectElement.evaluate((el: Element): string => el.outerHTML);
        console.log(selectOuterHTML);
        
        // Select by index (0-based)
        await selectElement.selectOption({ index: 0 });
        
        // Get the selected option value
        const selectedValue: string = await selectElement.inputValue();
        console.log(`Selected option value: ${selectedValue}`);
        
        // To get the selected option element HTML (similar to Selenium's getFirstSelectedOption)
        const selectedOption: Locator = selectElement.locator('option:checked');
        const selectedOptionHTML: string = await selectedOption.evaluate((el: Element): string => el.outerHTML);
        console.log(selectedOptionHTML);

        // Alternative selection methods with proper typing:
        // await selectElement.selectOption('alfa');  // by value or text
        // await selectElement.selectOption({ label: 'alfa' });  // by visible text
        // await selectElement.selectOption({ value: 'alfa' });  // by value attribute

    } catch (err: unknown) {
        // Type guard for error handling
        if (err instanceof Error) {
            console.log(err.message);
            console.log(err.stack);
        } else {
            console.log('An unknown error occurred:', err);
        }
    } finally {
        // Close browser
        await browser.close();
    }

}

// Main execution with error handling
demo().catch((err: Error): void => {
    console.error(err);
    process.exit(1);
});
