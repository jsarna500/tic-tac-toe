import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    
  ],
  imports: [
    BrowserModule,    AppRoutingModule,    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    FontAwesomeModule  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
