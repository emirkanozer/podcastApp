import { IPodcast } from './../../interfaces/podcasts';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private http:HttpService) {
  }

  podcast!:IPodcast;
  async ngOnInit() {
    this.podcast = await this.http.getPodcasts();
  }

}
