import { AngularLearningAppPage } from './app.po';

describe('angular-learning-app App', function() {
  let page: AngularLearningAppPage;

  beforeEach(() => {
    page = new AngularLearningAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
