import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  boolChangeClass: boolean;
  constructor() {
    this.boolChangeClass = false;
  }

}
