import { IPodcast, IPodcasts } from './interfaces/podcasts';
import { HttpService } from './services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  podcasts: any[] = []

  constructor(private http: HttpService) {
    this.http.podcasts$.subscribe(res => {
      this.podcasts = res

      console.log(this.podcasts)

    } )
  }


  ngOnInit() {
  }

}
