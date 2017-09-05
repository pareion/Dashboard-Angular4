const getScriptSrc = (callbackName) => {
  return `https://maps.googleapis.com/maps/api/js?key=AIzaSyAqg1BzcJOAGeLAIbA5tgrHBWtrfc6Rx5U&callback=${callbackName}&libraries=visualization`;
}

export class GmapSAService {

  private map: google.maps.Map;
  private heatmap : google.maps.visualization.HeatmapLayer;  
  private geocoder: google.maps.Geocoder;
  private scriptLoadingPromise: Promise<void>;

  constructor() {
        //Loading script
        this.loadScriptLoadingPromise();
        //Loading other components
        this.onReady().then(() => {
          this.geocoder = new google.maps.Geocoder();
        });
  }

  onReady(): Promise<void> {
    return this.scriptLoadingPromise;
  }

  initMap(mapHtmlElement: HTMLElement, options: google.maps.MapOptions, data: google.maps.LatLng[]): Promise<google.maps.Map> {
    return this.onReady().then(() => {
      this.map = new google.maps.Map(mapHtmlElement, options),{
        zoom: 20,
        center: {lat: 55.3931161, lng: 10.3854726},
        mapTypeId: 'satellite'
      }
      return this.map;
    });
  }

  private loadScriptLoadingPromise() {
    const script = window.document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    const callbackName: string = 'initMap';
    script.src = getScriptSrc(callbackName);
    this.scriptLoadingPromise = new Promise<void>((resolve: Function, reject: Function) => {
      (<any>window)[callbackName] = () => { resolve(); };

      script.onerror = (error: Event) => { reject(error); };
    });
    window.document.body.appendChild(script);
  }

  addMarker(lat: number, lng: number, name: string): void{
      new google.maps.Marker({map: this.map, title: name, position: {lat:lat, lng:lng}});
  }
  addHeatmap(lat: number, lng: number, avgspeed: number, name: string){

    return this.onReady().then(() => {
      this.addMarker(lat, lng, name)
      this.heatmap = new google.maps.visualization.HeatmapLayer({
        data: [
          new google.maps.LatLng(lat, lng)
        ],
        map: this.map
      });
      if(avgspeed > 30){
        this.heatmap.set('gradient', ['rgba(255, 0, 0, 0)',
        'rgba(255, 0, 0, 1)'])
      }else if(avgspeed <= 30 && avgspeed > 0){
        this.heatmap.set('gradient', ['rgba(255, 255, 0, 0)',
        'rgba(255, 255, 0, 1)'])
      }else {
        this.heatmap.set('gradient', ['rgba(0, 225, 0, 0)',
        'rgba(0, 255, 0, 1)'])
      }
      this.heatmap.set('radius',30);
      this.heatmap.set('opacity', 1);
      
      this.heatmap.setMap(this.map);  
    });
    
  }
}