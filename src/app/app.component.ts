import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ItemListService } from './item-list.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemListService]
  

})
export class AppComponent {
  title = 'app';
}
