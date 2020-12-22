import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ListComponent} from './components/list/list.component';
import {GridComponent} from './components/grid/grid.component';
import {PieChartComponent} from './components/pie-chart/pie-chart.component';
import {PrimengModule} from '../primeng/primeng.module';
import {PanelListComponent} from './components/panel-list/panel-list.component';
import {CoreModule} from '../core/core.module';


@NgModule({
  declarations: [DashboardComponent, ListComponent, GridComponent, PieChartComponent, PanelListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule,
    CoreModule
  ]
})
export class DashboardModule {
}
