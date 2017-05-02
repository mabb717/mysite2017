import { Mywebsite2Page } from './app.po';

describe('mywebsite2 App', function() {
  let page: Mywebsite2Page;

  beforeEach(() => {
    page = new Mywebsite2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
