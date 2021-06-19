import { Component, Input, OnInit } from '@angular/core';
import { Feed } from 'src/app/_model/feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() feed: Feed;
  @Input() index: number;
  likedItem = '';
  liked = false;

  ngOnInit(): void {
    this.likedItem = localStorage.getItem(`feed-${this.index}`);
    if (this.likedItem) {
      this.feed.interactions.likes = 1;
      this.liked = true;
    }
  }

  incrementLikes() {
    if (!this.liked) {
      this.feed.interactions.likes += 1;
      this.liked = true;
      localStorage.setItem(`feed-${this.index}`, `liked`);
    } else {
      this.feed.interactions.likes -= 1;
      this.liked = false;
      localStorage.removeItem(`feed-${this.index}`);
    }
  }
}
