import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CardComponentModule } from "src/app/@theme/layouts/card/card.module";
import { NgrxComponent } from "./ngrx.component";

@NgModule({
    declarations: [NgrxComponent],
    imports: [CardComponentModule, FormsModule, CommonModule]
})
export class NgrxComponentModule{}