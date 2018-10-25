import { HeaderModuleModule } from './header-module.module';

describe('HeaderModuleModule', () => {
  let headerModuleModule: HeaderModuleModule;

  beforeEach(() => {
    headerModuleModule = new HeaderModuleModule();
  });

  it('should create an instance', () => {
    expect(headerModuleModule).toBeTruthy();
  });
});
