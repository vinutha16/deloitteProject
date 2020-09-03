import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomsDetailsComponent } from './components/rooms-details/rooms-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'room-details/:id',component:RoomsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
