import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WidgetComponent } from '../../../services/widgetLibrary-service/widget.component';
import { GmapService } from '../../../components/widgets/stationskort/gmap.service';
import { Http, Response } from '@angular/http';

//used to map jsonstring to a collection of data
import 'rxjs/add/operator/map';

@Component({
  selector: '[app-stationskort]',
  templateUrl: './stationskort.component.html',
  styleUrls: ['./stationskort.component.css']
})
export class StationskortComponent implements WidgetComponent, OnInit {
  @Input() id: number;
  @Input() title: string;
  @ViewChild('map') mapRef: ElementRef;

  private apiUrl = "http://adm-trafik-01.odknet.dk:2002/api/GetAllStations/Stations";
  data: any = [];

  constructor(private gmapService: GmapService, private http: Http) {
    this.getData();
    this.getAllStations();
  }

  ngOnInit() {
    this.initGoogleMap();
  } // end ngOnInit

  getData() {
    // see import comment
    return this.http.get(this.apiUrl).map((res: Response) => res.json())
  }

  getAllStations() {
    this.getData().subscribe(data => {
      this.data = data;
    })
  }

  initGoogleMap() {
    let mapService = this.gmapService;
    (this.gmapService.initMap(this.mapRef.nativeElement, {
      center: { lat: 55.3931161, lng: 10.3854726 },
      scrollwheel: true,
      zoom: 11,
      minZoom: 11,
      maxZoom: 16,
      streetViewControl: false,
      mapTypeControl: false
    }).then(() => {
      this.http.get(this.apiUrl).map((res: Response) => res.json()).subscribe(response => {
        if(response){
          for (var i in response) {
            if (response.hasOwnProperty(i)) {
              var marker = response[i];
              mapService.addMarker(Number(marker.latitude), Number(marker.longitude), marker.name + "\nUdsty: " + marker.equipmentType + "\nInstalleret: " + marker.installed);
            }
          }
        }
      })
    }));
  }// end initGoogleMap
}
