import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    description:new FormControl('',[Validators.required])
  });
  query=[];
  constructor() { }

  ngOnInit() {}
  get name(){
    return this.form.get('name')
  }
  get email(){
    return this.form.get('email')
  }
  get description(){
    return this.form.get('description')
  }
  formsubmitted(){
    this.query.push(this.form.value);

  }

}
