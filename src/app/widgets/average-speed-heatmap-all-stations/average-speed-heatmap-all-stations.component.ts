import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WidgetComponent } from '../../services/widgetLibrary-service/widget.component';
import { GmapSAASService } from './gmap.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { FormsModule  } from '@angular/forms';

import * as $ from 'jquery';

@Component({
  selector: '[app-average-speed-heatmap-all-stations]',
  templateUrl: './average-speed-heatmap-all-stations.component.html',
  styleUrls: ['./average-speed-heatmap-all-stations.component.css']
})
export class AverageSpeedHeatmapAllStationsComponent implements OnInit {
  @Input("4") id: number;
  @Input("Gennemsnitshastighed på alle stationer") title: string;
  @ViewChild('map') mapRef: ElementRef;

  markersRed: any = [];
  markersGreen: any = [];
  markersYellow: any = [];
  private apiUrl;

  // datetime picker
  dateFrom: Date = new Date();
  dateTo: Date = new Date();
  datepickerOpts = {
    autoclose: true,
    todayHighlight: true,
    assumeNearbyYear: true,
    format: 'd MM yyyy',
    icon : 'fa fa-calendar'
  }

  constructor(private gmapSAService: GmapSAASService, private http: Http) { 
  }

  ngOnInit() {
    this.initGoogleMap();
  }
  onClick(){
    var dateFrom = this.dateFrom.toISOString().slice(0, 10);
    var timeFrom = this.dateFrom.getHours() + ":" + (this.dateFrom.getMinutes() < 10 ? '0' : '') + this.dateFrom.getMinutes();
    var dateTo = this.dateTo.toISOString().slice(0, 10);
    var timeTo = this.dateTo.getHours() + ":" + (this.dateTo.getMinutes() < 10 ? '0' : '') + this.dateTo.getMinutes();

    this.apiUrl= "http://adm-trafik-01.odknet.dk:2003/api/AverageSpeed/GetMeasurementsBetweenDatesAllStations?from=" + dateFrom + "%20" + timeFrom + "&to=" + dateTo + "%20" + timeTo;
    this.LoadHeatmap()
  }

  initGoogleMap(){
    (this.gmapSAService.initMap(this.mapRef.nativeElement, {
      center: { lat: 55.3931161, lng: 10.3854726 },
      scrollwheel: true,
      zoom: 11,
      minZoom: 11,
      maxZoom: 16,
      streetViewControl: false,
      mapTypeControl: false
    },null));
  }
  LoadHeatmap():void{
    this.http.get(this.apiUrl).map((res: Response) => res.json()).subscribe(response => {

      if(response){
        Array.from(response).forEach((marker,i) => {
          if(marker['measurement'] < 30 && marker['measurement'] > 0){
              this.markersYellow.push(marker)
          }else if(marker['measurement'] > 30){
              this.markersRed.push(marker)
          }else{
              this.markersGreen.push(marker)
          }
        });
      }
      this.gmapSAService.addHeatmap(this.markersGreen,0,255)
      this.gmapSAService.addHeatmap(this.markersYellow,255,255)
      this.gmapSAService.addHeatmap(this.markersRed,255,0)
    })
  }
}
