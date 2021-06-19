import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/_model/feed';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  feeds: Feed[] = [
    {
      imageUrl: '',
      account: {
        authorName: 'Dean Winchester',
        authorImageUrl: '../../../assets/img/random_users/35.jpg',
      },
      interactions: {
        likes: 0,
        comments: [],
      },
    },
    {
      imageUrl: '',
      account: {
        authorName: 'Jesse Pinkman',
        authorImageUrl: '../../../assets/img/random_users/19.jpg',
      },
      interactions: {
        likes: 0,
        comments: [],
      },
    },
    {
      imageUrl: '',
      account: {
        authorName: 'Theodore Bagwell',
        authorImageUrl: '../../../assets/img/random_users/8.jpg',
      },
      interactions: {
        likes: 0,
        comments: [],
      },
    },
    {
      imageUrl: '',
      account: {
        authorName: 'Walter White',
        authorImageUrl: '../../../assets/img/random_users/9.jpg',
      },
      interactions: {
        likes: 0,
        comments: [],
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
