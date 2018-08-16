import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {

  birthDay = new Date(2015, 7, 25);
  person = { name: 'Minh Nguyên', age: 30 };
  address = Promise.resolve('92 Lê Thị Riêng');
  constructor() { }

  ngOnInit() {
  }

}
