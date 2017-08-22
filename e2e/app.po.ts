import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  toggleSideMenu(){
    return element(by.className("sidebar-toggle")).click();
  }

  getBodyClass(){
    return element(by.tagName("body")).getAttribute("class");
  }
}
