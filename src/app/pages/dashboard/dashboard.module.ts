import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponentModule } from 'src/app/@theme/layouts/card/card.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
    declarations: [DashboardComponent],
    providers: [],
    bootstrap: [DashboardComponent],
    imports: [RouterModule, CardComponentModule]
})
export class DashboardModule {}