import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApitestComponent } from './apitest/apitest.component';

const routes: Routes = [
  {path:'api',component:ApitestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
