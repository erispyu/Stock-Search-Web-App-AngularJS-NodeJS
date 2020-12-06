import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isSearchPageActive: string;

  currRoute: string;

  constructor() { }

  ngOnInit(): void {
    this.isSearchPageActive = "active";
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  clickSearch() {
    this.isSearchPageActive = "active";
  }

  clickOthers() {
    this.isSearchPageActive = "inactive";
  }

  clickWatchlist() {
    this.clickOthers();
  }

  clickPortfolio() {
    this.clickOthers();
  }
}
