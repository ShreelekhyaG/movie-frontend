import { BodyModuleModule } from './body-module.module';

describe('BodyModuleModule', () => {
  let bodyModuleModule: BodyModuleModule;

  beforeEach(() => {
    bodyModuleModule = new BodyModuleModule();
  });

  it('should create an instance', () => {
    expect(bodyModuleModule).toBeTruthy();
  });
});
