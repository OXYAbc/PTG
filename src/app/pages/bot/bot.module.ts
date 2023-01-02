import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BotComponent } from './bot.component';
import { BotService } from './bot.service';

@NgModule({
  declarations: [BotComponent],
  imports: [FormsModule, CommonModule],
  providers: [BotService,]
})
export class BotModule {}
