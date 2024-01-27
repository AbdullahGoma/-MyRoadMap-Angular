import { Component, OnDestroy } from '@angular/core';
import { Subscription, catchError, filter, map, retry } from 'rxjs';
import { PtomotionAdsService } from 'src/app/Services/ptomotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  storeInfo: StoreData;
  isImageShown: boolean = true;
  private subscriptions: Subscription[] = [];
  constructor(private promoAds: PtomotionAdsService) {
    this.storeInfo = new StoreData('Palestine Store', 'https://picsum.photos/400/200',
      ['Cairo', 'Dakahlia', 'Damieta']);
  }

  ngOnInit(): void {
    // let observer = {
    //   next:(data:string) => {
    //     console.log(data);
    //   },
    //   error:(err:string) => {
    //     console.log(err);
    //   },
    //   complete:() => {
    //     console.log("Ads Finished!");
    //   }
    // };
    // this.promoAds.getScheduleAds(3).subscribe(observer);


    // this.promoAds.getScheduleAds(3).subscribe((data) => {},
    // (err) => {},
    // () => {});

    // let adsSubscription:Subscription = this.promoAds.getScheduleAds(3).subscribe

    // this.subscription = this.promoAds.getScheduleAds(3).subscribe



    // let adsSubscription:Subscription = this.promoAds.getScheduleAds(3).subscribe({
    //   next:(data:string) => {
    //     console.log(data);
    //   },
    //   error:(err:string) => {
    //     console.log(err);
    //   },
    //   complete:() => {
    //     console.log("Ads Finished!");
    //   }
    // });

    // this.subscriptions.push(adsSubscription);


    let observer = {
      next: (data: string) => {
        console.log(data);
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Ads Finished!");
      }
    };

    // let filterObservable = this.promoAds.getScheduleAds(3).pipe(
    //   retry(3),
    //   catchError(err => {console.log(err)})
    // );

    let filterObservable = this.promoAds.getScheduleAds(3).pipe(
      filter(ad => ad.includes("white friday")),
      map(ad => "Ad: " + ad)
    );

    let adsSubscription = filterObservable.subscribe(observer);

    this.subscriptions.push(adsSubscription);


    // let sub = this.promoAds.getSerialAds().subscribe(ad => {
    //   console.log(ad);
    // });

    // this.subscriptions.push(sub);


    // adsSubscription.unsubscribe();

  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    for (let sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }



  toggleImage() {
    this.isImageShown = !this.isImageShown;
  }
}
