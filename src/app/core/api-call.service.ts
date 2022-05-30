import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private $filter: Subject<any> = new Subject<any>();
  constructor(
    private http: HttpClient
  ) { }

    getData(): any {
      this.$filter
          .pipe(
            switchMap((filter) => this.requestData()
          )).subscribe((res: any) => {
            console.log(res, 'api')
          })
      // console.log(this.requestData())
    }

  requestData() {
    return this.http.get('https://restcountries.com/v3.1/all')
  }
}
