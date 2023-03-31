import { Injectable, OnDestroy } from '@angular/core';
import { of } from 'rxjs';


@Injectable()
export class Sharedcomp3Service {
  dummyData$ = of('this is sharedcomp3service');
  constructor() {}

  getTitle() {
    return this.dummyData$;
  }

  ngOnDestroy() {
    console.log('sharedcomp3 service destroyed');
  }
}
