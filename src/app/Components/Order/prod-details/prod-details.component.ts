import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit {
  RecievedProdID:number = 0;
  prod:IProduct | null = null;
  prodIDsList: number[] = []; 



  constructor(private activatedRoute:ActivatedRoute,
    private router:Router, 
    private prodService: StaticProductsService,
    private location: Location) {

  }
  ngOnInit()
  {
    
    // this.RecievedProdID = Number(this.activatedRoute.snapshot.paramMap.get('pid'));
    // console.log(this.RecievedProdID);
    // this.prod = this.prodService.getProductByID(this.RecievedProdID);
    this.prodIDsList = this.prodService.getProdIDs();
    // console.log("IN INIT");

    // When navigate to same component, Will not reload the component
    // Even if there's changes in the route parameters.
    this.activatedRoute.paramMap.subscribe((paramMap) => { // Observe
      this.RecievedProdID = Number(paramMap.get('pid'));
      this.prod = this.prodService.getProductByID(this.RecievedProdID);
    })
    
  }

  goBack()
  {
    this.location.back();
  }
  prevProd()
  {
    let currIndex = this.prodIDsList.findIndex((elem) => elem == this.RecievedProdID);
    // console.log(currIndex);
    let prevProdID;
    if(currIndex > 0)
    {
      prevProdID = this.prodIDsList[currIndex - 1];
      this.router.navigate(['/Products', prevProdID]);
    }
  }

  nextProd()
  {
    let currIndex = this.prodIDsList.findIndex((elem) => elem == this.RecievedProdID);
    // console.log(currIndex);
    let nextProdID;
    if(currIndex < this.prodIDsList.length)
    {
      nextProdID = this.prodIDsList[currIndex + 1];;
      this.router.navigate(['/Products', nextProdID]);
    }
  }
}
