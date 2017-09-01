import { Component, Input, OnInit } from '@angular/core';
import { WidgetComponent } from '../../../services/widgetLibrary-service/widget.component';

import * as $ from 'jquery';
import { Http, Response } from '@angular/http';
//used to map jsonstring to a collection of data
import 'rxjs/add/operator/map';

@Component({
  selector: '[app-station-cartype-amount]',
  templateUrl: './station-cartype-amount.component.html',
  styleUrls: ['./station-cartype-amount.component.css']
})
export class StationCartypeAmountComponent implements WidgetComponent, OnInit {

  @Input() id: number;
  @Input() title: string;

  dateFrom: Date = new Date();
  dateTo: Date = new Date();
  station: string;

  datepickerOpts = {
    autoclose: true,
    todayHighlight: true,
    assumeNearbyYear: true,
  }

  // Antal biltyper 
  private apiUrl: string;
  data: any[];
  carTypeName: string;

  // Alle stationer

  private apiUrlStations: string = "http://adm-trafik-01.odknet.dk:2004/api/GetAllStations/Stations";
  dataStations: any[];
  selectedItem: string;

  constructor(private http: Http) {
    this.getAllStations();
  }

  ngOnInit() {
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
      }
    });

  }

  getApiData() {
    var dateFrom = this.dateFrom.toISOString().slice(0, 10);
    var timeFrom = this.dateFrom.getHours() + ":" + (this.dateFrom.getMinutes() < 10 ? '0' : '') + this.dateFrom.getMinutes();
    var dateTo = this.dateTo.toISOString().slice(0, 10);
    var timeTo = this.dateTo.getHours() + ":" + (this.dateTo.getMinutes() < 10 ? '0' : '') + this.dateTo.getMinutes();

    var fixedstring = this.selectedItem.split(' ')[0];
    this.apiUrl = "http://adm-trafik-01.odknet.dk:2004/api/CarType/GetCarTypes?from=" + dateFrom + "%20" + timeFrom + "&to=" + dateTo + "%20" + timeTo + "&station=" + fixedstring;
    console.log(this.apiUrl)

    this.http.get(this.apiUrl).map((res: Response) => res.json()).subscribe(data => {
      this.data = data;
    })
  }

  switchCase(int: number) {
    switch (int) {
      case 0: {
        this.carTypeName = "Person- og varebil";
        break;
      }
      case 1: {
        this.carTypeName = "Lastbil 2 akslet";
        break;
      }
      case 2: {
        this.carTypeName = "Lastbil 3 akslet";
        break;
      }
      case 3: {
        this.carTypeName = "Lastbil 4 akslet";
        break;
      }
      case 4: {
        this.carTypeName = "Lastvognstog 2/1-3";
        break;
      }
      case 5: {
        this.carTypeName = "Lastvognstog 3/2-3";
        break;
      }
      case 6: {
        this.carTypeName = "Sættevogn 2/1";
        break;
      }
      case 7: {
        this.carTypeName = "Sættevogn 2/2";
        break;
      }
      case 8: {
        this.carTypeName = "Sættevogn 2/3";
        break;
      }
      case 9: {
        this.carTypeName = "Sættevogn 3/1-2";
        break;
      }
      case 10: {
        this.carTypeName = "Sættevogn 3/3";
        break;
      }
      case 11: {
        this.carTypeName = "Busser";
        break;
      }
      case 12: {
        this.carTypeName = "Andre køretøjer";
        break;
      }
      default: {
        this.carTypeName = "Findes ikke";
        break;
      }
    }
  }

}
