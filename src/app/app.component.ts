import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  boolChangeClass: boolean;
  constructor( @Inject(DOCUMENT) private document: Document,
    private sharedService: SharedService) {
    document.body.style.overflowX = "hidden";
  }
  title = 'app';

  @HostListener("window:scroll", [])
  onWindowScroll() {
    //we'll do some stuff here when the window is scrolled
    let number = this.document.body.scrollTop;
    if (number >= 100) {
      this.sharedService.boolChangeClass = true;
      console.log('Scrolled below header.');
    } else {
      this.sharedService.boolChangeClass = false;
      console.log('Header is in view.');
    }
  }
}
