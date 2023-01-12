import { Dialog } from '@angular/cdk/dialog';
import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Account } from 'src/app/@core/account.model';
import { BankingService } from 'src/app/@core/services/Banking.services';
import { AlertComponent } from 'src/app/@theme/alert/alert.component';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.sass'],
})
export class ColumnsComponent {
  protected data: any;
  protected detailData?: Observable<Account>;
  protected selectMode: boolean = false;
  protected selectedItem: string[] = [];

  columnDef = [
    {
      cdkColumnDef: 'id',
      cdkColumnDefTitle: 'id',
    },
    {
      cdkColumnDef: 'account_number',
      cdkColumnDefTitle: 'account_number',
    },
    {
      cdkColumnDef: 'account_type',
      cdkColumnDefTitle: 'account_type',
    },
    {
      cdkColumnDef: 'balance',
      cdkColumnDefTitle: 'balance',
    },
    {
      cdkColumnDef: 'owner_name',
      cdkColumnDefTitle: 'owner_name',
    },
  ];
  filteredColumnDef = this.columnDef.map((column) => column.cdkColumnDef);

  constructor(private service: BankingService, private dialog: Dialog) {
    this.service.getAccounts().subscribe((res) => (this.data = res));
    this.filteredColumnDef.push('viewMore');
  }
  addItem(id: string) {
    if (this.selectMode) {
      if (this.selectedItem.includes(id)) {
        this.selectedItem = this.selectedItem.filter((e) => e !== id);
      } else {
        this.selectedItem.push(id);
      }
    }
  }

  onShowDetails(element: number) {
    this.detailData = this.service.getAccount(element);
    let dialogRef = this.dialog.open(AlertComponent, { data: this.detailData });
    dialogRef.componentInstance?.saveEdit.subscribe((res) =>
      this.service.updateAccountData(res).subscribe()
    );
    dialogRef.componentInstance?.deleteAccount.subscribe((res) =>
      this.service.deleteAccount(res).subscribe()
    );
  }
  onMultiselect() {
    this.selectMode = !this.selectMode;
    if (!this.selectMode) this.selectedItem = [];
  }
  deleteSelected() {
    if (this.selectedItem.length > 0)
      this.service.deleteAccounts(this.selectedItem).subscribe(res=> console.log(res));
  }
}
