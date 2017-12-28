import { Component, OnInit } from '@angular/core';
import {AnyserviceService} from '../service/anyservice.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services:any[]
  constructor(private service:AnyserviceService) { }

  ngOnInit() {
    this.service.getServiceData()
    .subscribe(response=>{
      this.services=response.json();
    })
  }

}
