import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  variable = 'This is product page';
  title = 'My first angular site';
  obj = {
  id: ' 1 ' ,
  name: ' Alisha '
};
arr = ['abc' , 'def' , 'ghi'];
isTrue = false;
myName = 'Alisha';
constructor() { }

  ngOnInit() {
  }

}
