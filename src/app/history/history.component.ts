import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  searchHistory: string[] = [];

  constructor() {}

  ngOnInit():void {
    const storedUserHistory = localStorage.getItem('userHistory');
    if (storedUserHistory) {
      this.searchHistory = JSON.parse(storedUserHistory);
    }
  }

  clearSearch() {
    localStorage.removeItem('userHistory');
    this.searchHistory= [];
  }
}