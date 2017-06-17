import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { UserComponent } from './system/user/user.component';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';

let rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    rootRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
