import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WidgetComponent } from '../../../services/widgetLibrary-service/widget.component';
import { GmapSAASService } from '../../../components/widgets/average-speed-heatmap-all-stations/gmap.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { FormsModule  } from '@angular/forms';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: '[app-average-speed-heatmap-all-stations]',
  templateUrl: './average-speed-heatmap-all-stations.component.html',
  styleUrls: ['./average-speed-heatmap-all-stations.component.css']
})
export class AverageSpeedHeatmapAllStationsComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @ViewChild('map') mapRef: ElementRef;

  dateTo: DateModel;
  dateFrom: DateModel;
  options: DatePickerOptions;
  options2: DatePickerOptions;
  markersRed: any = [];
  markersGreen: any = [];
  markersYellow: any = [];
  private apiUrl;
  constructor(private gmapSAService: GmapSAASService, private http: Http) { 
    this.options = new DatePickerOptions();
    this.options2 = new DatePickerOptions();
    this.options.format = "YYYY-MM-DD";
    this.options2.format = "YYYY-MM-DD";
  }

  ngOnInit() {
    this.initGoogleMap();
  }
  onClick(){
    this.apiUrl= "http://adm-trafik-01.odknet.dk:2003/api/AverageSpeed/GetMeasurementsBetweenDatesAllStations?from="+this.dateTo.formatted+"&to="+this.dateFrom.formatted;
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
