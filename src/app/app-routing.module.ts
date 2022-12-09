import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastDetailComponent } from './components/podcast-detail/podcast-detail.component';
import { PodcastComponent } from './components/podcast/podcast.component';

const routes: Routes = [
  {path: '', component: PodcastComponent,
},
{
  path: 'detail',
  component: PodcastDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
