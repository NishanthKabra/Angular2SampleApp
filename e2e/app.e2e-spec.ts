import { Angular2ProductShoppingAppPage } from './app.po';

describe('angular2-product-shopping-app App', function() {
  let page: Angular2ProductShoppingAppPage;

  beforeEach(() => {
    page = new Angular2ProductShoppingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
