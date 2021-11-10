import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BLokeshComponent } from './bharath/b-lokesh/b-lokesh.component';
import { BNijanthaComponent } from './bharath/b-nijantha/b-nijantha.component';
import { BharathComponent } from './bharath/bharath.component';
import { LBharathComponent } from './lokesh/l-bharath/l-bharath.component';
import { LokeshComponent } from './lokesh/lokesh.component';
import { NijanthaComponent } from './nijantha/nijantha.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "bharath",
    pathMatch: "full"
  },
  {
    path: "bharath",
    component: BharathComponent,
    children: [

      {
        path: "lokesh",
        component: BLokeshComponent
      },
      {
        path: "nijantha",
        component: BNijanthaComponent
      }
    ]
  },
  {
    path: "lokesh",
    component: LokeshComponent,
    children: [
      {
        path: "bharath",
        component: LBharathComponent
      }
    ]
  },
  {
    path: "nijantha",
    component: NijanthaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
