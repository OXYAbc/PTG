import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ListModel } from 'src/app/@core/list.model';
import { CheckboxSelectionState } from './state/multiselect-state';

@Component({
  selector: 'app-multiselects',
  templateUrl: './multiselects.component.html',
  styleUrls: ['./multiselects.component.sass'],
})
export class MultiselectsComponent {
  dropdownList: ListModel[]  = [
    { item_id: 1, item_text: 'Mumbai' },
    { item_id: 2, item_text: 'Bangaluru' },
    { item_id: 3, item_text: 'Pune' },
    { item_id: 4, item_text: 'Navsari' },
    { item_id: 5, item_text: 'New Delhi' },
  ];
  @Select(CheckboxSelectionState.getSelectedOptions)
  simpleSelectResults$?: Observable<string[]>;
}
