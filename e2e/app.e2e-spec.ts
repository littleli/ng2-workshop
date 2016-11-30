import { BeaustrapPage } from './app.po';

describe('beaustrap App', function() {
  let page: BeaustrapPage;

  beforeEach(() => {
    page = new BeaustrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
