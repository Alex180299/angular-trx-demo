import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs';
import {Session} from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public config = new Subject<Session[]>();
  public stompClient: any;

  constructor() {
  }

  public connect(): void {
    const ws = new SockJS(environment.serverSocket);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, (frame) => {
      this.stompClient.subscribe(`${environment.sessionsTopic}/config`, (sdkEvent) => this.handleConfig(sdkEvent), this.errorCallback);
    });
  }

  private handleConfig(sdkEvent: any): void {
    this.config.next(JSON.parse(sdkEvent.body));
  }

  private errorCallback(error): void {
    console.log(`Error in ws ${error}`);
    setTimeout(() => {
      this.connect();
    }, 5000);
  }
}
