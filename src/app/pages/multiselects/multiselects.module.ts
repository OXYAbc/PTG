import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MultiselectsComponent } from "./multiselects.component";
import { MultiselectComponent } from './multiselect/multiselect.component';
import { ResultsComponentModule } from "src/app/@theme/layouts/card/results/results.module";
import { MultiselectGroupeComponent } from './multiselect-groupe/multiselect-groupe.component';

@NgModule({
    imports:[FormsModule, CommonModule, ResultsComponentModule],
    declarations: [MultiselectsComponent, MultiselectComponent, MultiselectGroupeComponent],
    exports: [MultiselectsComponent]
})
export class MultiSelectsModule{}