const webdriverio  = require('webdriverio');
const url =	'http://the-internet.herokuapp.com/dropdown';

const options = { desiredCapabilities: { browserName: 'chrome' } };
let browser = webdriverio.remote(options);

browser = browser.init().url(url);

function selectRandomOption() { 

    browser.element('#dropdown').click();
    browser.elements('//*[@id="dropdown"]/option[not(@disabled="disabled")]')
    .then((options) => {
        let index = Math.ceil(Math.random() * options.value.length);
        browser.element(`//*[@id="dropdown"]/option[not(@disabled="disabled")][${index}]`).click();
        console.log(`option ${index} is selected`);
        browser.element('#dropdown').click(); // to close dropdown list
    })
    .catch(e => console.log(e));      
}

selectRandomOption();
setTimeout(() => browser.end(), 5000);

module.exports = selectRandomOption;