import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  template: `
    <div class="alert"></div>
    <div class="alert alert-danger" role="alert">
      <h4 class="alert-heading">Hold on!</h4>
      <p>Are you sure you want to <b>remove</b> this {{ data }}?</p>
      <div class="d-flex gap-2">
        <button class="btn btn-danger" (click)="approveMoveToTrash()">
          Yes i'am sure
        </button>
        <button class="btn btn-secondary" (click)="cancelTrash()">
          Cancel
        </button>
      </div>
    </div>
  `,
})
export class AlertMessageComponent {
  constructor(
    private dialogRef: DialogRef<boolean>,
    @Inject(DIALOG_DATA) public data: string
  ) {}

  approveMoveToTrash() {
    this.dialogRef.close(true);
  }
  cancelTrash() {
    this.dialogRef.close(false);
  }
}
