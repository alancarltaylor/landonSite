import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.css']
})
export class WelcomeBannerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  scroll(el, pos){
    // console.log("el: ", el);
    var y = el.scrollTop;
    y += Math.round( ( pos - y ) * 0.3 );
    if (Math.abs(y-pos) <= 2)
    {
        el.scrollTop = pos;
        return;
    }
    el.scrollTop = y;
    setTimeout(scroll, 40, el, pos);
    el.scrollIntoView();
  }

}
