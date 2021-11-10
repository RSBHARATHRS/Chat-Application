import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BharathComponent } from './bharath/bharath.component';
import { BLokeshComponent } from './bharath/b-lokesh/b-lokesh.component';
import { BNijanthaComponent } from './bharath/b-nijantha/b-nijantha.component';

import { LokeshComponent } from './lokesh/lokesh.component';
import { LBharathComponent } from './lokesh/l-bharath/l-bharath.component';
import { LNijanthaComponent } from './lokesh/l-nijantha/l-nijantha.component';

@NgModule({
  declarations: [
    AppComponent,
    BharathComponent,
    BLokeshComponent,
    BNijanthaComponent,
    LokeshComponent,
    LBharathComponent,
    LNijanthaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
