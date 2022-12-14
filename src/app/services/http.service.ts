import { IPodcast } from './../interfaces/podcasts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Parse  } from 'rss-to-json';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private podcasts: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])
  podcasts$: Observable<any[]> = this.podcasts.asObservable()

  constructor(private http: HttpClient) {
    this.fetchPodcasts()
  }

   fetchPodcasts() {
      Parse('https://anchor.fm/s/98e888/podcast/rss').then(res => {
        const currentValue = this.podcasts.value;
        const updatedValue = [...currentValue, res];
        this.podcasts.next(updatedValue)
      })

      Parse('https://omny.fm/shows/meksika-acmazi/playlists/podcast.rss').then(res => {
        const currentValue = this.podcasts.value;
        const updatedValue = [...currentValue, res];
        this.podcasts.next(updatedValue)
      })
      Parse('http://api.sr.se/api/rss/pod/10468').then(res => {
        const currentValue = this.podcasts.value;
        const updatedValue = [...currentValue, res];
        this.podcasts.next(updatedValue)
      })
      Parse('http://api.sr.se/api/rss/pod/10469').then(res => {
        const currentValue = this.podcasts.value;
        const updatedValue = [...currentValue, res];
        this.podcasts.next(updatedValue)
      })

      for (let index = 4000; index < 4024; index++) {
        Parse('http://api.sr.se/api/rss/pod/'+index).then(res => {
        const currentValue = this.podcasts.value;
        const updatedValue = [...currentValue, res];
        this.podcasts.next(updatedValue)
      })
      }
      for (let index = 3961; index < 3968; index++) {
        Parse('http://api.sr.se/api/rss/pod/'+index).then(res => {
        const currentValue = this.podcasts.value;
        const updatedValue = [...currentValue, res];
        this.podcasts.next(updatedValue)
      })
    }
  }
}

