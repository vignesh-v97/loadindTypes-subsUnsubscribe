import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import {
  map,
  startWith,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { ApiCallService } from 'src/app/core/api-call.service';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.scss']
})
export class TaskTwoComponent {
  copyApiRequest = this.apiCallService.requestData;
  loaded: boolean = false;
  

  @ViewChild('requestBtn') requestBtn: ElementRef;

    constructor(
      private apiCallService: ApiCallService
    ){
        
    }

    apiData:any;

    requestApiCall() {
      this.apiData = this.apiCallService.requestData().subscribe((res) => {
        console.log(res, 'comment')
      })
    }

    cancelApiCall(): void {
      this.apiData.unsubscribe()
    }

    ngAfterViewInit():void {
      fromEvent<any>(this.requestBtn.nativeElement, 'click')
      .pipe(
        switchMap((search) => this.copyApiRequest()))
      .subscribe((data) => {
        console.log(data)
      });
    }
  }
