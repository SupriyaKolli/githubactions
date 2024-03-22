import { After, AfterAll, BeforeAll, Status } from '@cucumber/cucumber';
import { Builder, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

export let driver: WebDriver;

BeforeAll(async () => {
    const options = new Options().headless(); // Create headless options
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options) // Set options
        .build();
    return driver.manage().window().maximize();
});

AfterAll(async () => driver.quit());

After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const attach = this.attach;
        const png = await driver.takeScreenshot();
        const decodedImage = Buffer.from(png, "base64");
        return attach(decodedImage, "image/png");
    }
});
