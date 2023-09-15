import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
export type Severity = 'success' | 'info' | 'warn' | 'error';
export interface configuration {
  severity:Severity;
  summary?:string;
  detail:string;
  life?: number;
  closable?: boolean;
  styleClass?: string | null;
  contentStyleClass?: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor(private messageService:MessageService) { }

  toast(message:string, title:string='', severity:Severity='error') {
    title = title?title:severity;
    let data:any = {severity:severity, summary:title, detail:message};
    this.messageService.add(data);
  }

  customToast(config:configuration) {
    let data:any = config;
    this.messageService.add(data);
  }
  

  multipleToast(messages:[]) {
      this.messageService.addAll(messages);
  }

  clear() {
      this.messageService.clear();
  }

}
