import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatTableModule } from '@angular/material/table'  

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './atoms/text/text.component';
import { ButtonComponent } from './atoms/button/button.component';
import { InputComponent } from './atoms/input/input.component';
import { LoginFormComponent } from './organisms/login-form/login-form.component';
import { PageComponent } from './templates/page/page.component';
import { HomeComponent } from './pages/home/home.component';
import { DisplayBigComponent } from './molecules/display-big/display-big.component';
import { TableComponent } from './pages/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './organisms/data-table/data-table.component';

import { JwtInterceptor } from './http-interceptor/auth-interceptor';
import { LogoComponent } from './atoms/logo/logo.component';
import { HeaderNavComponent } from './molecules/header-nav/header-nav.component';
import { NavLinksComponent } from './atoms/nav-links/nav-links.component';
import { HeaderComponent } from './organisms/header/header.component';
import { UserComponent } from './atoms/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    ButtonComponent,
    InputComponent,
    LoginFormComponent,
    PageComponent,
    HomeComponent,
    DisplayBigComponent,
    TableComponent,
    DataTableComponent,
    LogoComponent,
    HeaderNavComponent,
    NavLinksComponent,
    HeaderComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
