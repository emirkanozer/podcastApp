import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PlayerService } from 'src/app/services/player.service.ts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public http:HttpService, private playerService: PlayerService) { }

  ngOnInit(): void {
  }

}
