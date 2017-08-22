import { Component, Input, OnInit, ViewChild,ElementRef  } from '@angular/core';
import { WidgetComponent } from '../../../services/widget.component';
import { GmapService } from '../../../components/widgets/stationskort/gmap.service';

@Component({
  selector: '[app-stationskort]',
  templateUrl: './stationskort.component.html',
  styleUrls: ['./stationskort.component.css']
})
export class StationskortComponent implements WidgetComponent, OnInit {
  @Input() id: number;
  @Input() title: string;
  @ViewChild('map') mapRef: ElementRef;
  
    constructor(private gmapService: GmapService) { }

  ngOnInit() {
    (this.gmapService.initMap(this.mapRef.nativeElement, {
      center: { lat: 55.3931161, lng: 10.3854726 },
      scrollwheel: true,
      zoom: 11
    }).then(() => {
        this.gmapService.addMarker(55.3417, 10.5019);
    }));
    
  }

}