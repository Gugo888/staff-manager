import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonsComponent } from './persons/persons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonFormComponent } from './persons/person-form/person-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonsComponent,
    PersonFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
