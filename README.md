# Lab8_Starter

Jacob Kindley

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

A

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No because that feature can be broken into smaller units to be tested. Instead I would unit test the writing portion and the sending portion.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes because that is a small enough scale to unit test.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

If it was true, then it would run the tests without a browswer UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

beforeAll(async () => {

    await page.goto('http://127.0.0.1:5500');

    await page.$$('header > img').click();

    await page.waitForTimeout(500);
    
  });