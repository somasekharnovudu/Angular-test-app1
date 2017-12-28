import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigateHome(){
    this.router.navigate(['/home'])
  }

}
