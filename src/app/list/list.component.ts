import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
list;
text;
  constructor() { }

  ngOnInit() {
  	this.list = [{
  		text : 'HTML'
  	},
  	{
  		text : 'JS'
  	}
  	];
  }

  	addItem(){
  console.log(this.text);
  this.list.push({
  	text: this.text
  })
  	}
  

}
