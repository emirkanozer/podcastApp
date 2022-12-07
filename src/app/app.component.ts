import { IPodcast, IPodcasts } from './interfaces/podcasts';
import { HttpService } from './services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpService) {
  }

  podcast!: IPodcast;

  async ngOnInit() {
    this.podcast = await this.http.getPodcasts();
    console.log(this.podcast.items)
  }

}
