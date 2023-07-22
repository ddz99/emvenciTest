import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

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
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
