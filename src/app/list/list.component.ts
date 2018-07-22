import { Component, OnInit } from '@angular/core';
import { ItemListService} from '../item-list.service';


@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css'],
	providers: [ItemListService]
})
export class ListComponent implements OnInit {
	list;
	text;
	oldItem;
	state='default';
	constructor(private _itemListService: ItemListService) { }

	ngOnInit() {
		this.list = this._itemListService.getItemList();
	}

	addItem(){
		var newItem = {
			text: this.text
		};
        this.list.push(newItem);
		this._itemListService.addItem(newItem);
		
	}

	deleteItem(item){
		for (var i = 0; i <this.list.length; i++) {
			if(this.list[i].text == item){
				this.list.splice(i,1);
			}
		}
       this._itemListService.deleteItem(item);
	}

	editItem(list){
		this.state = 'edit';
		this.oldItem = list.text;
		this.text = list.text;
	}

	updateItem(){
		console.log(this.text);
		for (var i = 0; i <this.list.length; i++) {
			if(this.list[i].text == this.oldItem){
				this.list[i].text= this.text;
			}
		}
		this._itemListService.update(this.text,this.oldItem);
	}
}
