import { expect } from 'chai';

import { updateContent, Renderer } from '@gqlapp/testing-client-react';

describe('VideoUpload UI works', () => {
  const renderer = new Renderer({});
  const app = renderer.mount();
  renderer.history.push('/VideoUpload');
  const content = updateContent(app.container);

  it('VideoUpload page renders on mount', () => {
    // tslint:disable:no-unused-expression
    expect(content).to.not.be.empty;
  });

  it('VideoUpload page has title', async () => {
    expect(content.textContent).to.include('Hello, This is the VideoUpload module');
  });
});
