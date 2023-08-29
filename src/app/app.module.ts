import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './DashboardComponents/home/home.component';
import { NavbarComponent } from './DashboardComponents/navbar/navbar.component';
import { SearchbarComponent } from './DashboardComponents/searchbar/searchbar.component';
import { ScheduleComponent } from './DashboardComponents/schedule/schedule.component';
import { TasksComponent } from './DashboardComponents/tasks/tasks.component';
import { DonetasksComponent } from './DashboardComponents/donetasks/donetasks.component';
import { CardsComponent } from './DashboardComponents/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { EmojiComponent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { ProfileComponent } from './DashboardComponents/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchbarComponent,
    ScheduleComponent,
    TasksComponent,
    DonetasksComponent,
    CardsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PickerComponent,
    EmojiComponent
    // BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
