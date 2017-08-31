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
    console.log(this.dateTo)
    console.log(this.dateFrom)
    
    this.apiUrl= "http://adm-trafik-01.odknet.dk:2003/api/AverageSpeed/GetMeasurementsBetweenDatesAllStations?from="+this.dateTo.formatted+"&to="+this.dateFrom.formatted;
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
    this.http.get(this.apiUrl).map((res: Response) => res.json()).subscribe(response => {
      console.log(response)
      if(response){
        for (var i in response) {
          var marker = response[i];
          this.gmapSAService.addHeatmap(Number(marker.latitude), Number(marker.longitude), Number(marker.measurement), marker.name);
        }
      }
    })
  }
}
