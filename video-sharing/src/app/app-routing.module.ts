import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoListComponent } from './components/video-list/video-list.component'; 
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', component: VideoDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
