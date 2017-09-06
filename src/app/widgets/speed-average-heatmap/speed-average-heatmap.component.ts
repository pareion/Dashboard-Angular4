import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WidgetComponent } from '../../services/widgetLibrary-service/widget.component';
import { GmapSAService } from './gmap.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { FormsModule  } from '@angular/forms';


import * as $ from 'jquery';

@Component({
  selector: '[app-speed-average-heatmap]',
  templateUrl: './speed-average-heatmap.component.html',
  styleUrls: ['./speed-average-heatmap.component.css']
})

export class SpeedAverageHeatmapComponent implements OnInit {
  @Input("3") id: number;
  @Input("Average Speed Heatmap") title: string;
  @ViewChild('map') mapRef: ElementRef;

  station: String;

  heatmap : google.maps.visualization.HeatmapLayer;
  data: any = [];

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

   // all stations
  private apiUrlStations: string = "http://adm-trafik-01.odknet.dk:2001/api/GetAllStations/Stations";
  dataStations: any[];
  selectedItem: string;
  areacode: number;

  private apiUrl;

  constructor(private gmapSAService: GmapSAService, private http: Http) { 
  }
  ngOnInit() {
    this.initGoogleMap();
    this.getAllStations();
  } 

  getAllStations() {
    this.http.get(this.apiUrlStations).map((res: Response) => res.json()).subscribe(data => {
      this.dataStations = data;
    })
  
  }
  getSelectedStation() {

    this.dataStations.forEach(station => {
      if (station.name == this.selectedItem ) {
        this.selectedItem = station.name;
        this.areacode = station.areacode;
      }
    });

  }

  onClick(){
    var dateFrom = this.dateFrom.toISOString().slice(0, 10);
    var timeFrom = this.dateFrom.getHours() + ":" + (this.dateFrom.getMinutes() < 10 ? '0' : '') + this.dateFrom.getMinutes();
    var dateTo = this.dateTo.toISOString().slice(0, 10);
    var timeTo = this.dateTo.getHours() + ":" + (this.dateTo.getMinutes() < 10 ? '0' : '') + this.dateTo.getMinutes();

    this.apiUrl= "http://adm-trafik-01.odknet.dk:2001/api/AverageSpeed/GetMeasurementsBetweenDates?from=" + dateFrom + "%20" + timeFrom + "&to=" + dateTo + "%20" + timeTo + "&areaCode=" + this.areacode;
    this.LoadHeatmap()
    console.log(this.apiUrl)
    console.log("clicked!")
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
    this.http.get(this.apiUrl).map((res: Response) => res.json()).subscribe(marker => {
      this.gmapSAService.addHeatmap(Number(marker.latitude), Number(marker.longitude), Number(marker.averageSpeed), marker.name);
    })
  }
}