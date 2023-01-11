import { Component } from '@angular/core';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.sass'],
})
export class NgrxComponent {
  protected data: string = '';
  protected checkControl: boolean = false;

  protected shopList: Array<string> = ['Banan', 'Jabłko', 'Gruszka', 'Ogórek'];

  constructor() {}

  onSend() {
    this.shopList.push(this.data)
    this.checkControl = true;
  }
}
