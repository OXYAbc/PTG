import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.sass'],
})
export class MultiselectComponent {
  @Input() items$?: Observable<string[]>;
  @Output() selectedItems: EventEmitter<string[]> = new EventEmitter();
  protected selected: string[] = [];
  constructor() {}
  resetSelected() {
    this.selected = [];
    this.selectedItems?.emit(this.selected);
  }

  onItemSelect(item: string) {
    const index = this.selected.indexOf(item);
    if (index > -1) {
      this.selected.splice(index, 1);
    } else {
      this.selected.push(item);
    }
    this.selectedItems?.emit(this.selected);
  }
}
