import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoInfoComponent } from './modules/video-info/video-info.component';

const routes: Routes = [
  { path: '', loadChildren: './modules/modules.module#ModulesModule' },
  { path: 'videoInfo', component: VideoInfoComponent},
  { path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
