import { LandonSitePage } from './app.po';

describe('landon-site App', () => {
  let page: LandonSitePage;

  beforeEach(() => {
    page = new LandonSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
