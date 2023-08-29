import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from '@angular/router';
import { HomeComponent } from './DashboardComponents/home/home.component';
import { ProfileComponent } from './DashboardComponents/profile/profile.component';


export const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"profile",component:ProfileComponent},

]

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule { }
