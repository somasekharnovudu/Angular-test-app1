import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class EachserviceService {
  url="assets/data/servicedataeach.json"
  constructor(private http:Http) {}

  eachservicedata(){
    return this.http.get(this.url);
  }

}
