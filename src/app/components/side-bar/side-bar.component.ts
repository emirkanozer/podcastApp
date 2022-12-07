import { IPodcast } from './../../interfaces/podcasts';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  podcast:IPodcast[];
  constructor(private http:HttpService) {
    this.podcast=this.http.podcasts;
  }


  ngOnInit(): void {
  }

}
