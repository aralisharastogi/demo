import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  day = new Date('1995 , 09 , 19' );
  arr = [ 7 , 9 , 1 , 0 , 45 ];

  constructor() { }

  ngOnInit() {

  }
}
