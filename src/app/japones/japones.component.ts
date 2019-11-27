import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { chinesas} from '../chinesas';
import {JaponesService} from './japones.service';

@Component({
  selector: 'app-japones',
  templateUrl: './japones.component.html',
  styleUrls: ['./japones.component.css']
})
export class JaponesComponent implements OnInit {

  chinesas= chinesas;

 
  
  constructor() { }

  ngOnInit() {
  }

}
