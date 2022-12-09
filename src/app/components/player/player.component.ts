import { PlayerService } from './../../services/player.service.ts.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @ViewChild('audioPlayer') audio!: ElementRef

  constructor(public playerService: PlayerService) {
    this.playerService.isPlaying$.subscribe(res => {

      if (this.playerService.audioSrc) {
        this.audio.nativeElement.load()
        this.audio.nativeElement.play()

      }
    })
   }

  ngOnInit(): void {
  }

}
