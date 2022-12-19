import { Component, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import {
  CheckboxSelection,
  CheckboxSelectionState,
} from '../state/multiselect-state';

@Component({
  selector: 'app-multiselect-groupe',
  templateUrl: './multiselect-groupe.component.html',
  styleUrls: ['./multiselect-groupe.component.sass'],
})
export class MultiselectGroupeComponent {
  @Input() items?: any[];

  @Select(CheckboxSelectionState.getSelectedOptions)
  private stateItems$?: Observable<{ groupeMSelect: string[] }>;
  protected selectedItems$?: Observable<string[]>;

  constructor(private store: Store) {
    this.selectedItems$ = this.stateItems$?.pipe(
      map((res) => res.groupeMSelect)
    );
  }

  onItemSelect(item: string) {
    this.store.dispatch(new CheckboxSelection('groupeMSelect', item));
  }
}
