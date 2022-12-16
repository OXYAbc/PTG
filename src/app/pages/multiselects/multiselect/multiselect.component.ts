import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.sass'],
})
export class MultiselectComponent {
  @Output() checkedItems: EventEmitter<any> = new EventEmitter();
  @Input() items: any;
  selectedItems: any = [];
  constructor() {}

  onItemSelect(item: any) {
    const index = this.selectedItems.indexOf(item);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(item);
    }
    this.checkedItems.emit(this.selectedItems);
  }
}
