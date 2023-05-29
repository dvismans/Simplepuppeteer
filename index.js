const puppeteer = require("puppeteer");

(async () => {
	while (true) {
		console.log("Starting headless browser...");
		const browser = await puppeteer.launch({
			headless: "new",
			executablePath: process.env.CHROMIUM_PATH,
		});
		const page = await browser.newPage();
		await page.goto("https://www.google.com/");

		await browser.close();
		console.log("Worked!");
		// Pause the script for a definable number of minutes
		const pauseDuration = 5; // Define the pause duration in minutes
		const pauseMillis = pauseDuration * 60 * 1000; // Convert minutes to milliseconds
		console.log(`Pausing for ${pauseDuration} minutes...`);
		await new Promise(resolve => setTimeout(resolve, pauseMillis));
		console.log(`Pausing ended...`);
	}
})();