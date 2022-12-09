import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  audioSrc: any
  isPlaying: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  isPlaying$: Observable<boolean> = this.isPlaying.asObservable()

  constructor() {}

  play() {
    console.log(this.audioSrc)
    this.isPlaying.next(!this.isPlaying.value)
  }
}
