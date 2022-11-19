
import { Component,OnInit } from '@angular/core';
declare var device : any;

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})

export class AppComponent implements OnInit {

  
ngOnInit(){
  document.addEventListener("deviceready",()=> device.platform)
}


  title = 'eranko';
}

