import {Injectable} from '@angular/core';
import {WebsocketService} from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(public wsService: WebsocketService) {
  }

  public connect(): void {
    this.wsService.connect();
  }
}
