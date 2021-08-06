import { Component, OnInit, ViewChild } from '@angular/core';
import { FetchMapService } from './fetch-map.service';
import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent,
} from 'angular-google-charts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'global-map-data-viz';
  mapData: any;
  isDataLive = false;

  public charts: {
    title: string;
    type: ChartType;
    data: any[][];
    columns?: Column[];
    options?: {};
  }[] = [];

  @ViewChild('chart', { static: true })
  public chart!: GoogleChartComponent;

  constructor(private map: FetchMapService, private router: Router) {
    this.map.getData().subscribe((data) => {
      console.log(data);
      this.mapData = data;
      this.charts.push({
        title: 'Geo Chart',
        type: ChartType.GeoChart,
        columns: ['Country', 'Popularity'],
        data: this.mapData,
      });
      this.isDataLive = true;
    });
  }

  public onReady() {
    console.log('Chart ready');
  }

  public onError(error: ChartErrorEvent) {
    console.error('Error: ' + error.message.toString());
  }

  public onSelect(event: ChartSelectionChangedEvent) {
    console.log('Selected: ' + event.toString());
  }

  public onMouseEnter(event: ChartMouseOverEvent) {
    console.log('Hovering ' + event.toString());
  }

  public onMouseLeave(event: ChartMouseLeaveEvent) {
    console.log('No longer hovering ' + event.toString());
  }

  public ngOnInit() {
    console.log(this.chart);
  }
}
