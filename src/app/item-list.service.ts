import { Injectable } from '@angular/core';
import { Init } from './init.itemList';


@Injectable({
	providedIn: 'root'
})
export class ItemListService extends Init {

	constructor() { 
		super();
		console.log("itemListService");
		this.load();
	}
	getItemList(){
		var list = JSON.parse(localStorage.getItem('list'));
		return list;
	}
	addItem(item){
	var list = JSON.parse(localStorage.getItem('list'));
	list.push(item);
	localStorage.setItem('list',JSON.stringify(list));	
	}
	deleteItem(item){
		var list = JSON.parse(localStorage.getItem('list'));
		for (var i = 0; i <list.length; i++) {
			if(list[i].text == item){
				list.splice(i, 1);
			}
		}
		localStorage.setItem('list', JSON.stringify(list));

	}
	update(text,oldText){
		var list = JSON.parse(localStorage.getItem('list'));
		for (var i = 0; i <list.length; i++) {
			if(list[i].text == oldText){
				list[i].text = text;
			}
		}
		localStorage.setItem('list', JSON.stringify(list));
	}
}
