import { Component, Input, OnInit } from '@angular/core';
import { Suggestion } from 'src/app/_model/suggestion';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss'],
})
export class SuggestionComponent implements OnInit {
  @Input() suggestion: Suggestion;

  constructor() {}

  ngOnInit(): void {
  }
}
