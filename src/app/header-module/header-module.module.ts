import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchDummyComponent } from './header/search-dummy/search-dummy.component';
import { SearchSmartComponent } from './header/search-smart/search-smart.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
//import { NgMatSearchBarModule } from 'ng-mat-search-bar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [HeaderComponent,LogoComponent,SearchDummyComponent,SearchSmartComponent],
  exports:[HeaderComponent,LogoComponent,SearchDummyComponent,SearchSmartComponent]
})
export class HeaderModuleModule { }
