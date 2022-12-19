import { Component, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { ListModel } from 'src/app/@core/list.model';
import {
  CheckboxSelection,
  CheckboxSelectionState,
} from '../state/multiselect-state';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.sass'],
})
export class MultiselectComponent {
  @Input() items?: ListModel[];

  @Select(CheckboxSelectionState.getSelectedOptions)
  private stateItems$?: Observable<{ simpleMSelect: string[] }>;
  protected selectedItems$?: Observable<string[]>;

  constructor(private store: Store) {
    this.selectedItems$ = this.stateItems$?.pipe(
      map((res) => res.simpleMSelect)
    );
  }

  onItemSelect(item: string) {
    this.store.dispatch(new CheckboxSelection('simpleMSelect', item));
  }
}
