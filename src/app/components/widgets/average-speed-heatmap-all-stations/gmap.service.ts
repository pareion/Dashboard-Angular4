const getScriptSrc = (callbackName) => {
  return `https://maps.googleapis.com/maps/api/js?key=AIzaSyCSNz5K6EolI-EWwdD0ej1GRQSLkb173-k&callback=${callbackName}&libraries=visualization`;
}

export class GmapSAASService {

  private map: google.maps.Map;
  private heatmap : google.maps.visualization.HeatmapLayer;  
  private geocoder: google.maps.Geocoder;
  private scriptLoadingPromise: Promise<void>;
  private red : number
  private green : number
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
  data: any[] = []
  addHeatmap(any: any[], red: number, green: number){
    
    return this.onReady().then(() => {
      this.data = []
      //this.addMarker(lat, lng, name)
      Array.from(any).forEach((marker,i) => {
        this.data.push(new google.maps.LatLng(marker['latitude'],marker['longitude']))
      });
      this.heatmap = new google.maps.visualization.HeatmapLayer({
        data: this.data,
        map: this.map
      });
      this.heatmap.set('gradient', ['rgba('+red.valueOf()+','+green.valueOf()+', 0, 0)',
      'rgba('+red.valueOf()+','+green.valueOf()+', 0, 1)'])

      this.heatmap.set('radius',10);
      this.heatmap.set('opacity', 1);
      
      this.heatmap.setMap(this.map);  
    });
    
  }
}