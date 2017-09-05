import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WidgetComponent } from '../../services/widgetLibrary-service/widget.component';
import { GmapSAService } from './gmap.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { FormsModule  } from '@angular/forms';
import { DatePickerModule, DatePickerOptions, DateModel } from 'ng2-datepicker';


@Component({
  selector: '[app-speed-average-heatmap]',
  templateUrl: './speed-average-heatmap.component.html',
  styleUrls: ['./speed-average-heatmap.component.css']
})

export class SpeedAverageHeatmapComponent implements OnInit {
  @Input("3") id: number;
  @Input("Average Speed Heatmap") title: string;
  @ViewChild('map') mapRef: ElementRef;

  dateTo: DateModel;
  dateFrom: DateModel;
  options: DatePickerOptions;
  options2: DatePickerOptions;
  station: String;

  heatmap : google.maps.visualization.HeatmapLayer;
  data: any = [];

  private apiUrl;
  constructor(private gmapSAService: GmapSAService, private http: Http) { 
    this.options = new DatePickerOptions();
    this.options2 = new DatePickerOptions();
    this.options.format = "YYYY-MM-DD";
    this.options2.format = "YYYY-MM-DD";
  }
  ngOnInit() {
    this.initGoogleMap()
  } 
  onClick(){
    this.apiUrl= "http://adm-trafik-01.odknet.dk:2001/api/AverageSpeed/GetMeasurementsBetweenDates?from="+this.dateTo.formatted+"&to="+this.dateFrom.formatted+"&station="+this.station;
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