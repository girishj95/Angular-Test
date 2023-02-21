import { Injectable } from '@angular/core';
import { Country } from './models/Country';
import { Region } from './models/Regions';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SelectService {

  private APIURL = "https://restcountries.com/v2/region/";

  constructor(private http: HttpClient) { }


  getRegions() {
    return [
     new Region(1, 'Asia' ),
     new Region(2, 'Europe' ),
    ];
  }

  public getCountries(name:string)
  {
    return this.http.get(this.APIURL+name);
  }
  

}
