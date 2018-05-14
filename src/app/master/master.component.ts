import { Component, OnInit } from '@angular/core';
import { Master } from './master.model';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})
export class MasterComponent implements OnInit {

  data: Master[] = [];
  title: string;

  getData(data){
    this.data.push(data);
  }

  constructor() { }
  ngOnInit() {
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
