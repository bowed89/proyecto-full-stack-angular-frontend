import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  animations: [fadeIn]
})
export class KeepersComponent implements OnInit {
  title = 'Keepers';

  constructor() { }

  ngOnInit(): void {
    console.log('Keepers works!');

  }

}
