import { IPodcast } from './../../interfaces/podcasts';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  constructor(private http:HttpService) { }

  podcast!:IPodcast;
  async ngOnInit() {
    this.podcast = await this.http.getPodcasts();
  }

}
