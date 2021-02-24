import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryPageComponent } from './entry-page/entry-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entry-page',
    pathMatch: 'full'
  },
  {
    path: 'entry-page',
    component: EntryPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
