import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
  title = 'Animals';
  constructor() { }

  ngOnInit(): void {
    console.log('Animals works!');
  }

}
