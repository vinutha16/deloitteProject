import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http:HttpClient) { }
  getHomeDetails(){
return this.http.get<any>('https://run.mocky.io/v3/2ee803c1-0901-4861-935e-a50eac5e8316');
  }
  getRoomDetails(){
    return this.http.get<any>('https://run.mocky.io/v3/e78443c9-bbcb-44a4-93f0-986fe1339e22');
  }
  getCollections(){
    return this.http.get<any>('https://run.mocky.io/v3/7be5041c-721e-400c-bba4-5526482331ec');
  }
}
