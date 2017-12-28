import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {AnyserviceService} from '../service/anyservice.service';
import {EachserviceService} from '../service/eachservice.service';

@Component({
  selector: 'app-eachservice',
  templateUrl: './eachservice.component.html',
  styleUrls: ['./eachservice.component.css']
})
export class EachserviceComponent implements OnInit {
  topic:string;
  count:number=0;
  url:string;
  serviceChecker;
  topicdetail;
  eachdata;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private service:AnyserviceService,
              private eachservicer:EachserviceService) { }

  ngOnInit() {
    this.route.params.subscribe((response)=>{
      this.topic=response.name;
    });
    this.topic=this.topic.toLowerCase();    
    this.service.getServiceData().subscribe(
      response=>{
        this.serviceChecker=response.json();
      },
      error=>{
        console.log(error)
      },()=>{
        this.getEachData();
      });    
  }
  getEachData(){
    this.eachservicer.eachservicedata()
    .subscribe(
      (response)=>{
      this.eachdata=response.json();
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.filtereach()
      }
    )
  }
  filtereach(){
    console.log('entered to filereas');
    this.count=0;
    for(let i in this.serviceChecker){
      if(this.serviceChecker[i].body.indexOf(this.topic)!=-1){
        this.count=1;
        var j=this.serviceChecker[i].body.indexOf(this.topic)
        this.topicdetail=this.eachdata[i][j];
        console.log(this.topicdetail);
      }
      setTimeout(()=>{ 
        if(this.count==0){
          this.router.navigate(['/home'])
        }
      },500);
    }
  }
}
