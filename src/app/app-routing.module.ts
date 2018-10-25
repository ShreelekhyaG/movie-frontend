import { NgModule, Component } from '@angular/core';
import { HeaderModuleModule} from './header-module/header-module.module';
import { BodyModuleModule} from './body-module/body-module.module';
import { LogoComponent } from './header-module/header/logo/logo.component';
import { SearchDummyComponent } from './header-module/header/search-dummy/search-dummy.component';
import { SearchSmartComponent } from './header-module/header/search-smart/search-smart.component';
import { HeaderComponent } from './header-module/header/header.component';
import {MovieCardsComponent} from './body-module/movie-cards/movie-cards.component';
import {AppComponent} from './app.component';
import {RouterModule,Routes, Route} from '@angular/router';
const appRoutes: Routes=[
    {path:'home', component:AppComponent},
    {path:'search/:query',component:MovieCardsComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'**',redirectTo:'/home',pathMatch:'full'}
  ]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComp=[AppComponent,MovieCardsComponent]