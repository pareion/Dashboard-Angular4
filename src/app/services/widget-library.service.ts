import { Injectable } from '@angular/core';

@Injectable()
export class WidgetLibraryService {
  widgets: IWidget[];
  widgetsToBeSpawned: IWidget[];
  widgetsToBeRemoved: IWidget[];
  public spawn: { (): void; }; //<--- acts like a delegate that will fire event
  public remove: { (): void; }; //<--- acts like a delegate that will fire event

  constructor() {
    //init the array
    this.widgets = [];
    this.widgetsToBeSpawned = [];
    this.widgetsToBeRemoved = [];
    //Register all widgets here
    this.widgets.push(new TestWidget());
    this.widgets.push(new Test2Widget());
    this.widgets.push(new Test3Widget());
    this.widgets.push(new Test4Widget());
    //--------> Add more here

    //Sort array based on title name
    this.widgets.sort(function (a, b) {
      var nameA = a.title.toUpperCase();
      var nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      //same names
      return 0;
    });
  }

  //Life cycle hook
  ngOnInit() { }

  spawnWidget(id: number) {
    for (var index = 0; index < this.widgets.length; index++) {
      if (this.widgets[index].id == id) {
        this.widgetsToBeSpawned.push(this.widgets[index]);
        this.spawn();
        break;
      }
    }
  }

  removeWidget(id: number) {
    for (var index = 0; index < this.widgets.length; index++) {
      if (this.widgets[index].id == id) {
        this.widgetsToBeRemoved.push(this.widgets[index]);
        this.remove();
        break;
      }
    }
  }
}

//Interface for all widgets to implement
interface IWidget {
  id: number;
  title: string;
  spawn(): string;
}

interface addWidget {
  (message: string): void;
}

//Implementations ---------------->
class TestWidget implements IWidget {
  id: number;
  title: string;

  constructor() {
    this.id = 1;
    this.title = "Test Boks 1";
  }
  spawn(): string {
    return "<p> hello world From 1 </p>";
  }
}

class Test2Widget implements IWidget {
  id: number;
  title: string;

  constructor() {
    this.id = 2;
    this.title = "Test Boks 2";
  }
  spawn(): string {
    return "<p> hello world 2</p>";
  }
}

class Test3Widget implements IWidget {
  id: number;
  title: string;

  constructor() {
    this.id = 3;
    this.title = "Test Boks 3";
  }
  spawn(): string {
    return "<p> hello world 3</p>";
  }
}

class Test4Widget implements IWidget {
  id: number;
  title: string;

  constructor() {
    this.id = 4;
    this.title = "map";
  }
  spawn(): string {
    //return '<style>#map{height:80%;width:50%}html,body{height:100%;margin:0;padding:0}</style><div id="map">test</div><script>function initMap(){setMarkers(new google.maps.Map(document.getElementById("map"),{zoom:11,center:{lat:55.4038,lng:10.4024}}))}function setMarkers(e){for(var n={url:"http://open.odense.dk/markersNimages/gray.png",size:new google.maps.Size(20,32),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,32)},t={url:"http://open.odense.dk/markersNimages/green.png",size:new google.maps.Size(20,32),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,32)},r={coords:[1,1,1,20,18,20,18,1],type:"poly"},l=0;l<station.length;l++){var s=station[l],a="image_gray";switch(s[3]){case"Active":a=t;break;default:a=n}new google.maps.Marker({position:{lat:s[1],lng:s[2]},map:e,icon:a,shape:r,title:s[0]})}}var station=[["Birkum Nord\nStatus: ?\nUdstyr: OE Fartviser med Moxa på GPRS\nInstalleret: 28-11-2011\nKilde: ATKI A/S",55.3417,10.5019," "],["Birkum Syd\nStatus: ?\nUdstyr: OE Fartviser med Moxa på GPRS\nInstalleret: 28-11-2011\nKilde: ATKI A/S",55.3392,10.503," "],["Birkum Øst\nStatus: ?\nUdstyr: OE Fartviser med Moxa på GPRS\nInstalleret: 28-11-2011\nKilde: ATKI A/S",55.3348,10.5105," "],["Fangel Nord\nStatus: ?\nUdstyr: OE Fartviser med Moxa på GPRS\nInstalleret: 28-11-2011\nKilde: ATKI A/S",55.32,10.3191," "],["Bladstrupvej Øst\nStatus: ?\nUdstyr: OE Fartviser med Moxa på GPRS\nInstalleret: 28-11-2011\nKilde: ATKI A/S",55.4502,10.3761," "],["Bladstrupvej Vest\nStatus: ?\nUdstyr: OE Fartviser med Moxa på GPRS\nInstalleret: 28-11-2011\nKilde: ATKI A/S",55.4548,10.3672," "],["Korup\nStatus: ?\nUdstyr: OE Fartviser med Moxa på GPRS\nInstalleret: 28-11-2011\nKilde: ATKI A/S",55.4256,10.2838," "],["Ejlstrup - Retning mod Korup\nStatus: ?\nUdstyr: OE Fartviser med Moxa på GPRS\nInstalleret: 28-11-2011\nKilde: ATKI A/S",55.4024,10.2609," "],["Ålykke Alle [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.4012,10.368," "],["Anderupvej km 1,433\nStatus: Active\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.4383,10.3896,"Active"],["Beldringevej Nord\nStatus: ?\nUdstyr: Fartviser med radar, flash og GPRS\nInstalleret: Ukendt\nKilde: ATKI A/S",55.4553,10.3149," "],["Beldringevej Syd\nStatus: ?\nUdstyr: Fartviser med radar, flash og GPRS\nInstalleret: Ukendt\nKilde: ATKI A/S",55.4518,10.3103," "],["Bogensevej\nStatus: ?\nUdstyr: Fartviser med radar, flash og GPRS\nInstalleret: Ukendt\nKilde: ATKI A/S",55.4255,10.3414," "],["Ejlskovgade [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.4028,10.3794," "],["Energivej\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.3453,10.401," "],["Falen km 1,569 [FMA]\nStatus: Active\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.3868,10.3569,"Active"],["Filosofgangen\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.3932,10.3841," "],["Fraugde-kærby-vej [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.3858,10.4907," "],["Gammel Højmevej\nStatus: ?\nUdstyr: Fartviser med radar, flash og GPRS\nInstalleret: Ukendt\nKilde: ATKI A/S",55.3569,10.3084," "],["Grønlandsgade - [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.4026,10.4004," "],["Havnegade km 0,435\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.4101,10.3848," "],["Havnegade km 1,797\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.4213,10.3823," "],["Hjallesegade\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.3564,10.3873," "],["Hjallelsesvej km 2,171\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.3801,10.3958," "],["Jarlsberggade - [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.4009,10.3781," "],["Kastanievej - [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.3886,10.3802," "],["Kertemindevej km 8,768 [FMA]\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.4318,10.4762," "],["Kochsgade km 1,973 [FMA]\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: ukendt\nKilde: ATKI A/S",55.4131,10.4124," "],["Lindvedvej - [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.3374,10.4095," "],["Lovbjergvej\nStatus: ?\nUdstyr: Fartviser med radar, flash og GPRS\nInstalleret: Ukendt\nKilde: ATKI A/S",55.3121,10.323," "],["Middelfartvej - [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.3944,10.3629," "],["Niels Bohrs Alle km 3,927 [FMA]\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.3754,10.4569," "],["Nr. Lyndelse Vej\nStatus: ?\nUdstyr: Fartviser med radar flash og GPRS\nInstalleret: Ukendt\nKilde: ATKI A/S",55.3244,10.4284," "],["Nyborgvej km 1,638 [FMA]\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.3927,10.4264," "],["Næsbyvej km 1,011 [FMA]\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.4097,10.3688," "],["Odins Bro\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 18-03-2016\nKilde: ATKI A/S",55.4226,10.3866," "],["Otterupvej km 9,588 [FMA]\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.4718,10.3851," "],["Ravnebjerggyden Nord\nStatus: ?\nUdstyr: Fartviser med radar, flash og GPRS\nInstalleret: 22-01-2014\nKilde: ATKI A/S",55.3809,10.2646," "],["Ravnebjerggyden Syd\nStatus: ?\nUdstyr: Fartviser med radar, flash og GPRS\nInstalleret: Ukendt\nKilde: ATKI A/S",55.3737,10.265," "],["Rismarksvej km 4,203 [FMA]\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.4241,10.3591," "],["Rugårdsvej nr. 4 - [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-201\nKilde: ATKI A/S",55.3992,10.3778," "],["Rugårdsvej nr. 57 - [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.3989,10.3638," "],["Skibhusvej km 1,187\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.4127,10.3951," "],["Svendborgvej km 5,014 [FMA]\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.3155,10.4472," "],["Thomas B. Thriges 17 a. [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.4016,10.3912," "],["Thomas B. Thriges 17 b. [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.4017,10.3907," "],["Thomas B. Thriges Gade 17 c. [FMA]\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 04-07-2011\nKilde: ATKI A/S",55.3991,10.3902," "],["Tietgens Alle - [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.3814,10.3746," "],["Toldbodgade - [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.4054,10.3798," "],["Vangeledsgårdsvej\nStatus: ?\nUdstyr: Fartviser med radar, flash og GPRS\nInstalleret: Ukendt\nKilde: ATKI A/S",55.3377,10.3612," "],["Vestre Stationsvej - [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.3979,10.3767," "],["Vindegade - [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.3962,10.3788," "],["Vollsmose Alle km 1,220 [FMA]\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.4109,10.4417," "],["Østre Knalvej km 0,102 [FMA]\nStatus: ?\nUdstyr: FMA med spoler og GPRS\nInstalleret: 29-05-2014\nKilde: ATKI A/S",55.4373,10.4228," "],["Rugårdsvej km 4,574 [FMA]\nStatus: ?\nUdstyr: FMA med spoler og GPRSInstalleret: 29-05-2014\nKilde: ATKI A/S",55.4112,10.3294," "],["Skovalleen - [PR]\nStatus: ?\nUdstyr: CA Profiler eller Traffic Monitor på GPRS\nInstalleret: 01-02-2011\nKilde: ATKI A/S",55.3698,10.3815," "]];</script> <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBflt9A8rNkej4Ke-iVd2cMdxHZjAZJ8NI&callback=initMap"></script>';
    return '';
  }

}