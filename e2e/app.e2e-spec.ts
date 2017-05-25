import { NgMaterialAdminPage } from './app.po';

describe('ng-material-admin App', () => {
  let page: NgMaterialAdminPage;

  beforeEach(() => {
    page = new NgMaterialAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
