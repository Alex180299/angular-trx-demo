import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebsocketService} from './services/websocket.service';
import {SessionsService} from './services/sessions.service';



@NgModule({
  declarations: [],
  providers: [
    WebsocketService,
    SessionsService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
