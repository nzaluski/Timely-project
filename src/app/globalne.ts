import { Injectable } from '@angular/core';

@Injectable()

export class globalne {

  startTime: string  =  Date();
  
  public  setTime(time: any){
    this.startTime=time;
  }
  public  getTime(time: any){
    return this.startTime;
  }
}