import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailComponent } from '../content-detail/content-detail.component';
import { ContentListComponent } from '../content-list/content-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ContentListComponent,
  },
  {
    path: 'details/:id',
    component: ContentDetailComponent,
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
