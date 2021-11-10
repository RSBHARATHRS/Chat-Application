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
import { BGroupComponent } from './bharath/b-group/b-group.component';
import { LGroupComponent } from './lokesh/l-group/l-group.component';
import { NijanthaComponent } from './nijantha/nijantha.component';
import { NBharathComponent } from './nijantha/n-bharath/n-bharath.component';
import { NLokeshComponent } from './nijantha/n-lokesh/n-lokesh.component';
import { NGroupComponent } from './nijantha/n-group/n-group.component';

@NgModule({
  declarations: [
    AppComponent,
    BharathComponent,
    BLokeshComponent,
    BNijanthaComponent,
    LokeshComponent,
    LBharathComponent,
    LNijanthaComponent,
    BGroupComponent,
    LGroupComponent,
    NijanthaComponent,
    NBharathComponent,
    NLokeshComponent,
    NGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
