import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AnyserviceService {
  private url='assets/data/anyservicedata.json';
  constructor(private http:Http) { }
  getServiceData(){
    return this.http.get(this.url);
  }

}
