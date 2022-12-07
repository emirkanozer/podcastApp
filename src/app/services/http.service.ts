import { IPodcast } from './../interfaces/podcasts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Parse } from 'rss-to-json';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
    this.podcasts=[];
  }

  podcasts:IPodcast[];

  getPodcasts() {
     const url = 'https://anchor.fm/s/98e888/podcast/rss';
    Parse(url).then(e => {
      this.podcasts.push(e);
    })
  }
}

