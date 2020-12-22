import {Component, Input, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import {UIChart} from 'primeng/primeng';
import {Observable, Subscription} from 'rxjs';
import {Session} from '../../../core/models/session.model';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @ViewChild('chart') chart: UIChart;
  public data: any;
  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;
  @Input() session: Session;

  constructor() {
  }

  ngOnInit(): void {
    this.data = {
      labels: ['Aprobadas', 'Rechazadas'],
      datasets: [
        {
          data: [this.session.approved, this.session.disapproved],
          backgroundColor: [
            '#36A2EB',
            '#FF6384',
          ],
          hoverBackgroundColor: [
            '#36A2EB',
            '#FF6384',
          ]
        }]
    };

    this.eventsSubscription = this.events.subscribe(() => this.update());
  }

  public update(): void {
    this.data.datasets[0].data[0] = this.session.approved;
    this.data.datasets[0].data[1] = this.session.disapproved;
    this.chart.refresh();
  }

}
