import { AppPage } from './app.po';

describe('open-traffic-data.web App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('test sidebar toggle', () => {
    page.navigateTo();
    page.toggleSideMenu();
    expect(page.getBodyClass()).toEqual('sidebar-collapse');
    page.toggleSideMenu();
    expect(page.getBodyClass()).toEqual('');
  });
});
