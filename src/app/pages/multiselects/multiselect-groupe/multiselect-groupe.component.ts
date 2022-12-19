import { Component, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CheckboxSelection, CheckboxSelectionState } from '../state/multiselect-state';

@Component({
  selector: 'app-multiselect-groupe',
  templateUrl: './multiselect-groupe.component.html',
  styleUrls: ['./multiselect-groupe.component.sass']
})
export class MultiselectGroupeComponent{
  @Input() items?: any;
  // @Select(CheckboxSelectionState.getSelectedOptions)
  // selectedItems$?: Observable<string[]>;

  constructor(private store: Store) {}

  onItemSelect(item: string) {
    // this.store.dispatch(new CheckboxSelection(item));
  }

}
