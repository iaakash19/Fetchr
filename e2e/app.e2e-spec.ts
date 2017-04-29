import { FetchrTablePage } from './app.po';

describe('fetchr-table App', () => {
  let page: FetchrTablePage;

  beforeEach(() => {
    page = new FetchrTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
