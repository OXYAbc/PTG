import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/@core/account.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass'],
})
export class AlertComponent {
  protected editMode: boolean = false;
  protected account!: Account;
  protected editCopy: Partial<Account> = {};
  public saveEdit = new EventEmitter();
  public deleteAccount = new EventEmitter();

  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: Observable<Account>
  ) {
    this.data.subscribe((account) => (this.account = account));
  }

  onEdit() {
    this.editMode = !this.editMode;
    this.editMode ? (this.editCopy = { ...this.account }) : false;
  }
  onClose() {
    this.dialogRef.close();
  }
  onSubmit() {
    this.saveEdit.emit(this.editCopy);
  }
  onDelete() {
    this.deleteAccount.emit(this.account.id);
    this.onClose();
  }
}
