import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedComp2Service } from './sharedcomp2.service';

@Component({
  selector: 'app-sharedcomp2',
  templateUrl: './sharedcomp2.component.html',
  styleUrls: ['./sharedcomp2.component.css'],
})
export class Sharedcomp2Component {
  sharedComp2Data$: Observable<any>;
  @Input() isMultipleUsage: boolean = false;

  constructor(private sharedComp2Service: SharedComp2Service) {}

  ngOnInit() {
    this.sharedComp2Data$ = this.sharedComp2Service.sharedComp2Data$;
    if (!this.isMultipleUsage) {
      this.sharedComp2Service.getFakeApiData();
    }
  }

  ngOnDestroy() {
    console.log('sharedcomp2 component destroyed');
  }
}
