import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PtomotionAdsService {

  private adsList:string[];

  constructor() { 
    this.adsList = ["Big Discounts",
                    "Sale Up to 50%",
                  "Check our white friday offers",
                // "", 
              "Special white friday offers up to 70%"];
  }

  getScheduleAds(intervalInSeconds:number) : Observable<string>
  {
    return  new Observable<string>((observer)=>{ // Callback function
      // observer.next();
      // observer.error();
      // observer.complete();
      let counter = 0;
      let adsTimer = setInterval(() => {
        console.log("In Interval.");
        
        if(counter == this.adsList.length){
          observer.complete();
        }
        if(this.adsList[counter] == ""){
          observer.error("Error: Empty Ad."); // will stop observable
        }
        observer.next(this.adsList[counter]);
        counter++;
      },intervalInSeconds * 1000);
      return {
        unsubscribe() {
          // Will be called:
          // 1- Error
          // 2- Complete
          // 3- Unsubscribe
          clearInterval(adsTimer);
          console.log("In Observable Unsubscribe");
        }
      }
    });

  }

  getSerialAds() : Observable<string>
  {
    // return of("ad1", "ad2", "ad3", "ad4", "ad5");
    return from(this.adsList);
  }

}
