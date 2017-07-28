import { Component, ViewChild, ElementRef, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  boolChangeClass: boolean;
  constructor(@Inject(DOCUMENT) private document: Document){
    document.body.style.overflowX = "hidden";
  }
  title = 'app';

  @HostListener("window:scroll", [])
    onWindowScroll() {
     //we'll do some stuff here when the window is scrolled
     let number = this.document.body.scrollTop;
     if ( number >= 100) {
        this.boolChangeClass = true;
        console.log('Scrolled below header.');
    } else {
        this.boolChangeClass = false;
        console.log('Header is in view.');
   }
    }

  ngOnInit(){

}
}
