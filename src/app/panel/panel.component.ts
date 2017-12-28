import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'panelComp',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input('show') isShow:boolean=false;
  @Input('service') service;
  @Output('whichlink') whichlink=new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }
  bodyshower(){
    this.isShow=!this.isShow
  }
  linkClicker($event:string){
    let link=encodeURI(($event).toLowerCase());
    this.whichlink.emit(link);
  }
}
