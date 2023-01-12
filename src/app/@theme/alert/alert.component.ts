import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/@core/account.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent {
  constructor(public dialogRef: DialogRef<string>, @Inject(DIALOG_DATA) public data: Observable<Account>){}
}
