import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WidgetComponent } from '../../../services/widgetLibrary-service/widget.component';
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
      zoom: 11,
      minZoom:11,
      maxZoom: 16,
      streetViewControl: false,
      mapTypeControl: false
    }).then(() => {
      var stations = [{"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.5019","stationType":"OE Fartviser med Moxa på GPRS","name":"Birkum Nord","installDate":"28-11-2011","source":"ATKI A/S","stationID":"51910323","lattitude":"55.3417"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.503","stationType":"OE Fartviser med Moxa på GPRS","name":"Birkum Syd","installDate":"28-11-2011","source":"ATKI A/S","stationID":"51910626","lattitude":"55.3392"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.5105","stationType":"OE Fartviser med Moxa på GPRS","name":"Birkum Øst","installDate":"28-11-2011","source":"ATKI A/S","stationID":"51911509","lattitude":"55.3348"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3191","stationType":"OE Fartviser med Moxa på GPRS","name":"Fangel Nord","installDate":"28-11-2011","source":"ATKI A/S","stationID":"52210325","lattitude":"55.32"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3761","stationType":"OE Fartviser med Moxa på GPRS","name":"Bladstrupvej Øst","installDate":"28-11-2011","source":"ATKI A/S","stationID":"52406800","lattitude":"55.4502"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3672","stationType":"OE Fartviser med Moxa på GPRS","name":"Bladstrupvej Vest","installDate":"28-11-2011","source":"ATKI A/S","stationID":"52407630","lattitude":"55.4548"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.2838","stationType":"OE Fartviser med Moxa på GPRS","name":"Korup","installDate":"28-11-2011","source":"ATKI A/S","stationID":"54300530","lattitude":"55.4256"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.2609","stationType":"OE Fartviser med Moxa på GPRS","name":"Ejlstrup - Retning mod Korup","installDate":"28-11-2011","source":"ATKI A/S","stationID":"54401374","lattitude":"55.4024"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.368","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Ålykke Alle [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46197520","lattitude":"55.4012"},
      {"status":"Active","direction":"?","expectedInterval":"5","longtitude":"10.3896","stationType":"FMA med spoler og GPRS","name":"Anderupvej km 1,433","installDate":"29-05-2014","source":"ATKI A/S","stationID":"46102360","lattitude":"55.4383"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3149","stationType":"Fartviser med radar, flash og GPRS","name":"Beldringevej Nord","installDate":"Ukendt","source":"ATKI A/S","stationID":"4205431","lattitude":"55.4553"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3103","stationType":"Fartviser med radar, flash og GPRS","name":"Beldringevej Syd","installDate":"Ukendt","source":"ATKI A/S","stationID":"42005432","lattitude":"55.4518"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3414","stationType":"Fartviser med radar, flash og GPRS","name":"Bogensevej","installDate":"Ukendt","source":"ATKI A/S","stationID":"4205061","lattitude":"55.4255"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3794","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Ejlskovgade [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46116920","lattitude":"55.4028"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.401","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Energivej","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46119970","lattitude":"55.3453"},
      {"status":"Active","direction":"?","expectedInterval":"5","longtitude":"10.3569","stationType":"FMA med spoler og GPRS","name":"Falen km 1,569 [FMA]","installDate":"29-05-2014","source":"ATKI A/S","stationID":"46171141","lattitude":"55.3868"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3841","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Filosofgangen","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46122610","lattitude":"55.3932"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.4907","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Fraugde-kærby-vej [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46123490","lattitude":"55.3858"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3084","stationType":"Fartviser med radar, flash og GPRS","name":"Gammel Højmevej","installDate":"Ukendt","source":"ATKI A/S","stationID":"46125011","lattitude":"55.3569"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.4004","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Grønlandsgade - [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46127040","lattitude":"55.4026"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3848","stationType":"FMA med spoler og GPRS","name":"Havnegade km 0,435","installDate":"29-05-2014","source":"ATKI A/S","stationID":"46130130","lattitude":"55.4101"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3823","stationType":"FMA med spoler og GPRS","name":"Havnegade km 1,797","installDate":"29-05-2014","source":"ATKI A/S","stationID":"46130131","lattitude":"55.4213"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3873","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Hjallesegade","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46132310","lattitude":"55.3564"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3958","stationType":"FMA med spoler og GPRS","name":"Hjallelsesvej km 2,171","installDate":"29-05-2014","source":"ATKI A/S","stationID":"4205200","lattitude":"55.3801"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3781","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Jarlsberggade - [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46139300","lattitude":"55.4009"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3802","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Kastanievej - [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46141520","lattitude":"55.3886"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.4762","stationType":"FMA med spoler og GPRS","name":"Kertemindevej km 8,768 [FMA]","installDate":"29-05-2014","source":"ATKI A/S","stationID":"4205360","lattitude":"55.4318"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.4124","stationType":"FMA med spoler og GPRS","name":"Kochsgade km 1,973 [FMA]","installDate":"55.4131","source":"ATKI A/S","stationID":"46144310","lattitude":""},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.4095","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Lindvedvej - [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46149730","lattitude":"55.3374"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.323","stationType":"Fartviser med radar, flash og GPRS","name":"Lovbjergvej","installDate":"Ukendt","source":"ATKI A/S","stationID":"46150381","lattitude":"55.3121"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3629","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Middelfartvej - [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46153630","lattitude":"55.3944"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.4569","stationType":"FMA med spoler og GPRS","name":"Niels Bohrs Alle km 3,927 [FMA]","installDate":"29-05-2014","source":"ATKI A/S","stationID":"46157142","lattitude":"55.3754"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.4284","stationType":"Fartviser med radar, flash og GPRS","name":"Nr. Lyndelse Vej","installDate":"Ukendt","source":"ATKI A/S","stationID":"46157911","lattitude":"55.3244"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.4264","stationType":"FMA med spoler og GPRS","name":"Nyborgvej km 1,638 [FMA]","installDate":"29-05-2014","source":"ATKI A/S","stationID":"46158140","lattitude":"55.3927"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3688","stationType":"FMA med spoler og GPRS","name":"Næsbyvej km 1,011 [FMA]","installDate":"29-05-2014","source":"ATKI A/S","stationID":"46158520","lattitude":"55.4097"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3866","stationType":"FMA med spoler og GPRS","name":"Odins Bro","installDate":"18-03-2016","source":"ATKI A/S","stationID":"46159579","lattitude":"55.4226"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3851","stationType":"FMA med spoler og GPRS","name":"Otterupvej km 9,588 [FMA]","installDate":"29-05-2014","source":"ATKI A/S","stationID":"4205090","lattitude":"55.4718"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.2646","stationType":"Fartviser med radar, flash og GPRS","name":"Ravnebjerggyden Nord","installDate":"22-01-2014","source":"ATKI A/S","stationID":"4205401","lattitude":"55.3809"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.265","stationType":"Fartviser med radar, flash og GPRS","name":"Ravnebjerggyden Syd","installDate":"Ukendt","source":"ATKI A/S","stationID":"4205402","lattitude":"55.3737"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3591","stationType":"FMA med spoler og GPRS","name":"Rismarksvej km 4,203 [FMA]","installDate":"29-05-2014","source":"ATKI A/S","stationID":"4205461","lattitude":"55.4241"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3778","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Rugårdsvej nr. 4 - [PR]","installDate":"01-02-201","source":"ATKI A/S","stationID":"46168142","lattitude":"55.3992"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3638","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Rugårdsvej nr. 57 - [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46168143","lattitude":"55.3989"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3951","stationType":"FMA med spoler og GPRS","name":"Skibhusvej km 1,187","installDate":"29-05-2014","source":"ATKI A/S","stationID":"46174030","lattitude":"55.4127"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.4472","stationType":"FMA med spoler og GPRS","name":"Svendborgvej km 5,014 [FMA]","installDate":"29-05-2014","source":"ATKI A/S","stationID":"46183271","lattitude":"55.3155"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3912","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Thomas B. Thriges 17 a. [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46185912","lattitude":"55.4016"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3907","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Thomas B. Thriges 17 b. [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46185911","lattitude":"55.4017"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3902","stationType":"FMA med spoler og GPRS","name":"Thomas B. Thriges Gade 17 c. [FMA]","installDate":"04-07-2011","source":"ATKI A/S","stationID":"46185910","lattitude":"55.3991"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3746","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Tietgens Alle - [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"42054704","lattitude":"55.3814"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3798","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Toldbodgade - [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46187890","lattitude":"55.4054"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3612","stationType":"Fartviser med radar, flash og GPRS","name":"Vangeledsgårdsvej","installDate":"Ukendt","source":"ATKI A/S","stationID":"4619156","lattitude":"55.3377"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3767","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Vestre Stationsvej - [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46191180","lattitude":"55.3979"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3788","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Vindegade - [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46193930","lattitude":"55.3962"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.4417","stationType":"FMA med spoler og GPRS","name":"Vollsmose Alle km 1,220 [FMA]","installDate":"29-05-2014","source":"ATKI A/S","stationID":"46194850","lattitude":"55.4109"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.4228","stationType":"FMA med spoler og GPRS","name":"Østre Knalvej km 0,102 [FMA]","installDate":"29-05-2014","source":"ATKI A/S","stationID":"46197210","lattitude":"55.4373"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3294","stationType":"FMA med spoler og GPRS","name":"Rugårdsvej km 4,574 [FMA]","installDate":"29-05-2014","source":"ATKI A/S","stationID":"4205030","lattitude":"55.4112"},
      {"status":"?","direction":"?","expectedInterval":"5","longtitude":"10.3815","stationType":"CA Profiler eller Traffic Monitor på GPRS","name":"Skovalleen - [PR]","installDate":"01-02-2011","source":"ATKI A/S","stationID":"46174560","lattitude":"55.3698"}];  

      stations.forEach((station) => {
        this.gmapService.addMarker(Number(station.lattitude), Number(station.longtitude), station.name + "\nUdstyrstype: "+ station.stationType + "\nInstallationsdato: " + station.installDate + "\nKilde: " + station.source + "\nStatus: " + station.status);

      });
    }));
    
  }

}