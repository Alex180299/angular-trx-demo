import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {SessionsService} from '../../../core/services/sessions.service';
import {Session} from '../../../core/models/session.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public sessions: Session[] = [];
  eventsSubject: Subject<void> = new Subject<void>();

  constructor(private sessionsService: SessionsService) {
  }

  ngOnInit(): void {
    this.sessionsService.wsService.config.asObservable().subscribe(sessions => {
      if (this.sessions.length === 0) {
        this.sessions = sessions;
      } else {
        for (let i = 0; i < sessions.length; i++) {
          this.sessions[i].approved = sessions[i].approved;
          this.sessions[i].disapproved = sessions[i].disapproved;
        }

        this.update();
      }
    });
  }

  public update(): void {
    this.eventsSubject.next();
  }

  connect(): void {
    this.sessionsService.connect();
  }
}
