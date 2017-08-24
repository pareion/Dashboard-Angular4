import { AppPage } from './app.po';

describe('open-traffic-data.web App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage(); 
    page.navigateTo();
  });

  it('test sidebar toggle', () => {
    page.toggleSideMenu();
    expect(page.getBodyClass()).toContain('sidebar-collapse');
    page.toggleSideMenu();
    expect(page.getBodyClass()).not.toContain('sidebar-collapse');
  });

  it('number of info-boxes is 4', () => {
    expect(page.getInfoBoxes().count()).toEqual(4);
  });

  it('test sidemenu', () => {
    page.disableCssAnimations();
    page.disableJquery();

    page.clickLink('Aktive Widgets');
    expect(page.sideMenuLinkClasses('Aktive Widgets')).toContain('active');
    page.clickLink('Aktive Widgets');
    expect(page.sideMenuLinkClasses('Aktive Widgets')).not.toContain('active');    
    page.clickLink('Widget Kartotek');
    expect(page.sideMenuLinkClasses('Widget Kartotek')).toContain('active');    
    page.clickLink('Widget Kartotek');
    expect(page.sideMenuLinkClasses('Widget Kartotek')).not.toContain('active');        
    page.clickLink('Dashboards');
    expect(page.sideMenuLinkClasses('Dashboards')).toContain('active');        
    page.clickLink('Widget Kartotek');
    expect(page.sideMenuLinkClasses('Widget Kartotek')).toContain('active');        
    page.clickLink('Dashboard');
    expect(page.sideMenuLinkClasses('Dashboards')).toContain('active');    
  });

  it('test widget functionality (add and remove a widget)', () => {
    page.disableCssAnimations();
    page.disableJquery();

    page.clickLink('Widget Kartotek');
    page.clickLink('Stationskort');
    expect(page.getBoxes().count()).toEqual(1);
    page.clickLink('Aktive Widgets');
    page.removeActiveWidget('Stationskort');
    expect(page.getBoxes().count()).toEqual(0); 
    
    page.clickLink('Widget Kartotek');    
    page.clickLink('Test Boks');
    expect(page.getBoxes().count()).toEqual(1);
    page.clickLink('Aktive Widgets');
    page.removeActiveWidget('Test Boks');
    expect(page.getBoxes().count()).toEqual(0);
  });

  it('multiple widgets on dashboard at the same time', () => {
    page.disableCssAnimations();
    page.disableJquery();

    page.clickLink('Widget Kartotek');
    page.clickLink('Stationskort');
    expect(page.getBoxes().count()).toEqual(1);
    page.clickLink('Test Boks');
    expect(page.getBoxes().count()).toEqual(2);
  });

  it('check number of drag and drop areas for widgets', () => {
    expect(page.getDragAndDropSections().count()).toEqual(2);
  });

  it('check widgets by ng components', () => {
    page.disableCssAnimations();
    page.disableJquery();

    page.clickLink('Widget Kartotek');
    page.clickLink('Stationskort');
    expect(page.getNgComponentDiv('app-stationskort').count()).toBeGreaterThanOrEqual(1);
  });
});
