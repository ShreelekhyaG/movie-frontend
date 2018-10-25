import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { HeaderModuleModule} from '../header-module/header-module.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    HeaderModuleModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [MovieCardsComponent],
  exports:[MovieCardsComponent]
})
export class BodyModuleModule { }
