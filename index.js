var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var config = require('./config.js')();


var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();



// login into the site
driver.get( config.url.login ).then(function(){
    driver.findElement(By.name( config.element.login.username.name )).sendKeys( config.data.login.username );
    driver.findElement(By.name( config.element.login.password.name )).sendKeys( config.data.login.password );
    driver.findElement(By.id( config.element.login.submit.id )).click();
});;



// unit selection
driver.get( config.url.lesson ).then(function(){
    config.data.lessons.map(function(lesson){
        driver.findElement(By.id( config.element.lesson.code.id )).sendKeys( lesson.code );
        driver.findElement(By.id( config.element.lesson.group.id )).sendKeys( lesson.group );
        driver.findElement(By.xpath( config.element.lesson.submit.xpath )).click();
        driver.sleep(1000);
    });
        
});


driver.sleep(10000);
driver.quit();