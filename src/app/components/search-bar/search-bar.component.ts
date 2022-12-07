import { Component, OnInit } from '@angular/core';
import { faSearch, faU } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  faSearch=faSearch;
  faUser=faUser;
}
