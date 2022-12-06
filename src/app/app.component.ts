import { IPodcast } from './interfaces/podcasts';
import { HttpService } from './services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpService) {
    this.http.getPodcasts();
    this.podcast=this.http.podcasts;
  }
  podcast:IPodcast[];
  ngOnInit() {
  }

}
