import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BGroupComponent } from './bharath/b-group/b-group.component';

import { BLokeshComponent } from './bharath/b-lokesh/b-lokesh.component';
import { BNijanthaComponent } from './bharath/b-nijantha/b-nijantha.component';
import { BharathComponent } from './bharath/bharath.component';
import { LBharathComponent } from './lokesh/l-bharath/l-bharath.component';
import { LGroupComponent } from './lokesh/l-group/l-group.component';
import { LNijanthaComponent } from './lokesh/l-nijantha/l-nijantha.component';
import { LokeshComponent } from './lokesh/lokesh.component';
import { NBharathComponent } from './nijantha/n-bharath/n-bharath.component';
import { NGroupComponent } from './nijantha/n-group/n-group.component';
import { NLokeshComponent } from './nijantha/n-lokesh/n-lokesh.component';
import { NijanthaComponent } from './nijantha/nijantha.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "bharath/lokesh",
    pathMatch: "full"
  },
  {
    path: "bharath",
    component: BharathComponent,
    children: [
      {
        path: "group",
        component: BGroupComponent
      },
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
        path: "group",
        component: LGroupComponent
      },
      {
        path: "bharath",
        component: LBharathComponent
      },
      {
        path: "nijantha",
        component: LNijanthaComponent
      }
    ]
  },
  {
    path: "nijantha",
    component: NijanthaComponent,
    children: [
      {
        path: "group",
        component: NGroupComponent
      },
      {
        path: "bharath",
        component: NBharathComponent
      },
      {
        path: "lokesh",
        component: NLokeshComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
