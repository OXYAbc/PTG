import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { BotService } from './bot.service';

export interface Message {
  sender: string;
  mess: string;
}

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.sass'],
})
export class BotComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  message!: string;
  converstation: Message[] = [];
  loading: boolean = false;
  number = 0;

  constructor(private service: BotService) {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  send() {
    this.converstation?.push({ sender: 'user', mess: this.message });
    this.loading = true;
    this.service.requestApi(this.message).subscribe((res) => {
      this.loading = false
      this.converstation?.push({ sender: 'bot', mess: res });
    });
    this.number++;
    this.message = '';
  }
  scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
