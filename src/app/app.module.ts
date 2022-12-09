import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { PodcastDetailComponent } from './components/podcast-detail/podcast-detail.component';
import { PlayerComponent } from './components/player/player.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SummaryPipe } from './pipes/summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SearchBarComponent,
    PodcastComponent,
    PodcastDetailComponent,
    PlayerComponent,
    UserInfoComponent,
    SummaryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
