import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MultiselectComponent } from "./multiselect.component";

@NgModule({
    imports:[CommonModule],
    declarations: [MultiselectComponent],
    exports: [MultiselectComponent]
})
export class MultiSelectModule{}