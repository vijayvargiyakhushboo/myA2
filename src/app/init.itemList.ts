export class Init {
	load() {
		if(localStorage.getItem('list') === null || localStorage.getItem('list') == undefined ){
          console.log("No item list found.. creating...");
          var list = [
          {
          	text : 'HTML'
          },
          {
          	text : 'JS'
          },
          {
          	text : 'ANGULAR'
          }];

          localStorage.setItem('list',JSON.stringify(list));
          return;
		}
	}
}