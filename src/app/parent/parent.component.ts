import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  emittedSharedComp1Data$: Observable<any>;
  constructor() {}

  ngOnInit() {}

  shareElderSiblingData(emittedSharedComp1Data$: Observable<any>) {
    this.emittedSharedComp1Data$ = emittedSharedComp1Data$;
  }
}
