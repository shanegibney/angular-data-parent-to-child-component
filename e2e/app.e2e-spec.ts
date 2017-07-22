import { AngulardataparenttochildPage } from './app.po';

describe('angulardataparenttochild App', () => {
  let page: AngulardataparenttochildPage;

  beforeEach(() => {
    page = new AngulardataparenttochildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
