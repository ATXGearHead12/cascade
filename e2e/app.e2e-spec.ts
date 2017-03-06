import { CascadePage } from './app.po';

describe('cascade App', function() {
  let page: CascadePage;

  beforeEach(() => {
    page = new CascadePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
