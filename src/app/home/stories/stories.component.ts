import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/_model/story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  stories: Story[] = [
    {
      account: {
        authorName: 'Michael',
        authorImageUrl: '../../../assets/img/random_users/64.jpg',
      },
      self: true,
      viewed: false,
    },
    {
      account: {
        authorName: 'Supardi',
        authorImageUrl: '../../../assets/img/random_users/33.jpg',
      },
      self: false,
      viewed: true,
    },
    {
      account: {
        authorName: 'Dean',
        authorImageUrl: '../../../assets/img/random_users/35.jpg',
      },
      self: false,
      viewed: true,
    },
    {
      account: {
        authorName: 'Theodore',
        authorImageUrl: '../../../assets/img/random_users/8.jpg',
      },
      self: false,
      viewed: false,
    },
    {
      account: {
        authorName: 'Walter',
        authorImageUrl: '../../../assets/img/random_users/9.jpg',
      },
      self: false,
      viewed: false,
    },
    {
      account: {
        authorName: 'Jesse',
        authorImageUrl: '../../../assets/img/random_users/19.jpg',
      },
      self: false,
      viewed: false,
    },
    {
      account: {
        authorName: 'Enola',
        authorImageUrl: '../../../assets/img/random_users/80.jpg',
      },
      self: false,
      viewed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
