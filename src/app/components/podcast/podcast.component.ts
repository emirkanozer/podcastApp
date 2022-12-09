import { PlayerService } from './../../services/player.service.ts.service';
import { IPodcast } from './../../interfaces/podcasts';
import { HttpService } from './../../services/http.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  @Input() item!:IPodcast;
  constructor(public http:HttpService, private playerService: PlayerService) { }

  async ngOnInit() {  }


  onClick(podcast: any) {
    this.playerService.audioSrc = podcast.items[0]
    this.playerService.play()

  }

}
