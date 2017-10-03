import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.css']
})
export class WelcomeBannerComponent implements OnInit {
  scrollToSource: Subject<number> = new Subject<number>();
  constructor(elRef:ElementRef) { }

  // @HostListener("window:scroll", ['$event'])
  // onWindowScroll($event: any): void {
  //   var target = this.getTargetElementRef(window.pageYOffset);
  //   this.scrollTo(target);
  // }

  ngOnInit() {
    this.scrollToSource.switchMap(targetYPos => {
      return Observable.interval(100) //interval just creates an observable stream corresponding to time, this emits every 1/10th of a second. This can be fixed or make it dynamic depending on the distance to scroll
      .scan((acc, curr) =>  acc + 5, window.pageYOffset) // scan takes all values from an emitted observable stream and accumulates them, here you're taking the current position, adding a scroll step (fixed at 5, though this could also be dynamic), and then so on, its like a for loop with +=, but you emit every value to the next operator which scrolls, the second argument is the start position
      .do(position => window.scrollTo(0, position)) /// here is where you scroll with the results from scan
      .takeWhile(val => val < targetYPos); // stop when you get to the target
    }).subscribe(); //don't forget!
  }

  // getTargetElementRef(currentYPos: number): ElementRef {
  //   // let result:ElementRef =   // you need to figure out how this works
  //     console.log(currentYPos);// I can't comment much on it without knowing more about the page
  //     return;// but you inject the host ElementRef in the component / directive constructor and use normal vanillaJS functions to find other elements
  // }

  scrollTo(target): void {
    // console.log("target: ", target);
     // this assumes you're passing in an ElementRef, it may or may not be appropriate, you can pass them to functions in templates with template variable syntax such as: <div #targetDiv>Scroll Target</div> <button (click)="scrollTo(targetDiv)">Click To Scroll</button>
     this.scrollToSource.next(target);
  }

  // scroll(el, pos){
  //   // console.log("el: ", el);
  //   var y = el.scrollTop;
  //   y += Math.round( ( pos - y ) * 0.3 );
  //   if (Math.abs(y-pos) <= 2)
  //   {
  //       el.scrollTop = pos;
  //       return;
  //   }
  //   el.scrollTop = y;
  //   // setTimeout(scroll, 40, el, pos);
  //   el.scrollIntoView();
  // }


}
