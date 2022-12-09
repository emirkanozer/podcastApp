import { IPodcast } from './../../interfaces/podcasts';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { faHome, faSearch,faHeart,faArrowRight,faHeadphones,faUser,faPodcast,faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  sideClass:boolean=true;
  faHome = faHome;
  faSearch = faSearch;
  faHeart = faHeart;
  faPodcast = faPodcast;
  faArrowLeft=faArrowLeft;
  faUser = faUser;
  faArrowRight = faArrowRight;
  constructor(private http:HttpService) {
  }

  podcast!:IPodcast;
   ngOnInit() {
     //this.podcast = await this.http.getPodcasts();
    }

  sideBar(){
    return console.log(this.sideClass = !this.sideClass)
  }
}
