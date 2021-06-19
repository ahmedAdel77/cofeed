import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/_model/story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  @Input() story: Story;
  constructor() {}

  ngOnInit(): void {}
}
