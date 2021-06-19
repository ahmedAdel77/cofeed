import { Component, OnInit } from '@angular/core';

import { Suggestion } from 'src/app/_model/suggestion';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
})
export class SuggestionsComponent implements OnInit {
  suggestions: Suggestion[] = [
    {
      account: {
        authorName: 'Sarah Tancredi',
        authorImageUrl: '../../../assets/img/random_users/32.jpg',
        authorUserName: '@dr.sarah',
      },
      followed: false,
    },
    {
      account: {
        authorName: 'Arthur Shelby',
        authorImageUrl: '../../../assets/img/random_users/67.jpg',
        authorUserName: '@art.shelby',
      },
      followed: true,
    },
    {
      account: {
        authorName: 'Vin Diesel',
        authorImageUrl: '../../../assets/img/random_users/64.jpg',
        authorUserName: '@vindiesel',
      },
      followed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
