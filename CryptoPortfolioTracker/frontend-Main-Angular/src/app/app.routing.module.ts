import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardingComponent } from './boarding/boarding.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: BoardingComponent },
];
const routerOptions: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports:[
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
export const routingComponents = [DashboardComponent, BoardingComponent];
