import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  title = 'Listado';
  numbers = new Array(6);

  constructor() { }

  ngOnInit(): void {
  }

}
