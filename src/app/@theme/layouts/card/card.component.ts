import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
