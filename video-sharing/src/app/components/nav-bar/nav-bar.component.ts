import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  showSearch: boolean = false;

  constructor() { }
  
  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

}
