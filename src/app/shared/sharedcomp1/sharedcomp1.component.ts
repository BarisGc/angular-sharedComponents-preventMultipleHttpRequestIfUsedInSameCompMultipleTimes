import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  of,
  catchError,
  shareReplay,
  Observable,
  map,
  last,
  tap,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-sharedcomp1',
  templateUrl: './sharedcomp1.component.html',
  styleUrls: ['./sharedcomp1.css'],
})
export class SharedComp1Component implements OnInit {
  constructor(private http: HttpClient) {}

  // "Input + Output" Approach
  @Input() sharedComp1Data$: Observable<any>;
  @Input() isMultipleUsage: boolean = false;
  @Output() shareElderSiblingDataEvent = new EventEmitter<Observable<any>>();

  ngOnInit() {
    if (!this.isMultipleUsage) {
      let fakeApiCall$ = this.http
        .get('https://jsonplaceholder.typicode.com/users')
        .pipe(
          map((data: Array<any>) => {
            console.log('sharedcomp1; network request', data);
            return data[0];
          }),

          tap((lastdata: any) => {
            this.shareElderSiblingDataEvent.emit(of(lastdata));
          }),
          shareReplay(1),
          catchError((err) => {
            console.log('err', err);
            return of(['İstek Başarısız; Data Yok']);
          })
        );
      this.sharedComp1Data$ = fakeApiCall$;
    }
  }

  ngOnDestroy() {
    console.log('sharedcomp1 component destroyed');
  }
}
