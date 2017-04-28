import { AnglarBlogPostPage } from './app.po';

describe('anglar-blog-post App', () => {
  let page: AnglarBlogPostPage;

  beforeEach(() => {
    page = new AnglarBlogPostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
