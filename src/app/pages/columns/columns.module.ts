import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ColumnsComponent } from "./columns.component";
import {CdkTableModule} from '@angular/cdk/table';


@NgModule({
    declarations: [ColumnsComponent],
    imports: [CommonModule, CdkTableModule],
    providers: []
})
export class ColumnsModule{}