import { Component, OnInit } from '@angular/core';
import { Master } from './master.model';
import { MasterService } from './master.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})

export class MasterComponent implements OnInit {

  data: Master[] = [];
  title: string;
  currentValue: Master;

  constructor(private _service: MasterService) { }

  getData(data){
    this._service.setId(data.id);
    this._service.setTag(data.tag);
    console.log(this._service.data);
    this.data.push(data);
  }

  
  ngOnInit() {
    this.currentValue = this._service.data;
    this.title = 'Tags'
    this.data = [
      new Master(1, "Java"),
      new Master(2, "HTML"),
      new Master(3, "Python"),
      new Master(4, "MySQL"),
      new Master(5, "C"),
    ]
  }

}
