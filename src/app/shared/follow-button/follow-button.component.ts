import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss'],
})
export class FollowButtonComponent implements OnInit {
  @Input() followed: boolean;

  buttonText: string;

  constructor() {}

  ngOnInit(): void {
    this.followed
      ? (this.buttonText = 'Followed')
      : (this.buttonText = 'Follow');
  }
}
