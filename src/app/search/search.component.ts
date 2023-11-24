import { Component } from '@angular/core';
import { GithubService } from '../services/githubServices';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  userData: any = {};

  userHistory: any[] = JSON.parse(localStorage.getItem('userHistory') || '[]');

  constructor(private githubService: GithubService) {
  }

  search() {
    this.userData = {};
    this.githubService.searchUsers(this.searchQuery).subscribe((data) => {
      this.searchResults = data.items;
    });
  }

  onUserClick(username: string) {
    this.githubService.getUserProfile(username).subscribe((data) => {
      if(this.userHistory) {
        this.userHistory.push({userSearch: this.searchQuery, userData: data});
      } else {
        this.userHistory = [{userSearch: this.searchQuery, userData: data}];
      }
      localStorage.setItem('userHistory', JSON.stringify(this.userHistory));
      this.userData = data;
      this.searchResults = [];
    })
  }

  isUserDataNotEmpty(): boolean {
    return Object.keys(this.userData).length !== 0;
  }
}