import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderModuleModule} from './header-module/header-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeaderModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
