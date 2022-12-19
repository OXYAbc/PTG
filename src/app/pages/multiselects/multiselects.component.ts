import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { ListModel, StateMutliselect } from 'src/app/@core/list.model';
import { CheckboxSelectionState } from './state/multiselect-state';

@Component({
  selector: 'app-multiselects',
  templateUrl: './multiselects.component.html',
  styleUrls: ['./multiselects.component.sass'],
})
export class MultiselectsComponent {
  protected dropdownList: ListModel[] = [
    { item_id: 1, item_text: 'Mumbai' },
    { item_id: 2, item_text: 'Bangaluru' },
    { item_id: 3, item_text: 'Pune' },
    { item_id: 4, item_text: 'Navsari' },
    { item_id: 5, item_text: 'New Delhi' },
  ];
  protected groupedCities = [
    {
      label: 'Germany',
      code: 'DE',
      items: [
        { label: 'Berlin', value: 'Berlin' },
        { label: 'Frankfurt', value: 'Frankfurt' },
        { label: 'Hamburg', value: 'Hamburg' },
        { label: 'Munich', value: 'Munich' },
      ],
    },
    {
      label: 'USA',
      code: 'US',
      items: [
        { label: 'Chicago', value: 'Chicago' },
        { label: 'Los Angeles', value: 'Los Angeles' },
        { label: 'New York', value: 'New York' },
        { label: 'San Francisco', value: 'San Francisco' },
      ],
    },
    {
      label: 'Japan',
      code: 'JP',
      items: [
        { label: 'Kyoto', value: 'Kyoto' },
        { label: 'Osaka', value: 'Osaka' },
        { label: 'Tokyo', value: 'Tokyo' },
        { label: 'Yokohama', value: 'Yokohama' },
      ],
    },
  ];
  @Select(CheckboxSelectionState.getSelectedOptions)
  private simpleSelectResults$?: Observable<StateMutliselect>;
  protected selectedItems$?: string[];

  constructor() {
    this.simpleSelectResults$
      ?.pipe(map((item: any) => item.simpleMSelect))
      .subscribe((res) => {
        this.selectedItems$ = res;
      });
  }
}
