import { Component, OnInit, Input } from '@angular/core';
import {Master} from '../master/master.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  @Input()
  val: Master;

  constructor() {
    console.log('ini dari constructor list')
   }

  ngOnInit() {
    console.log('ini dari onInit list')
  }

}
