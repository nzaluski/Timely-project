import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddProject: boolean = false;
  private subject = new Subject<any>();
  private time: string;

  constructor() { }

  toggleAddProject(): void {
    this.showAddProject = !this.showAddProject;
    this.subject.next(this.showAddProject);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  getTime(){
    return this.time;
  }

  setTime(start: string){
    this.time = formatDate(start, 'medium', 'en-US' );
  }
}
