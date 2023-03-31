import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  shareReplay,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedComp2Service {
  private _sharedComp2Data$ = new BehaviorSubject<any>(null);
  public sharedComp2Data$: Observable<any> = this._sharedComp2Data$;

  constructor(private http: HttpClient) {}

  getFakeApiData() {
    let fakeApiData$ = this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((data: Array<any>) => {
          console.log('sharedcomp2; network request', data);
          return data[0];
        }),
        catchError((err) => {
          console.log('err', err);
          return of(['İstek Başarısız; Data Yok']);
        }),
        shareReplay(1)
      );
    fakeApiData$.subscribe((data) => {
      this._sharedComp2Data$.next(data);
    });
  }

  ngOnDestroy() {
    console.log('sharedComp2 Service Destroyed');
  }
}
