import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'], 
  // providers: [StaticProductsService]
})
export class ProductListComponent implements OnInit, OnChanges {
  OrderDate:Date;
  // prodList:IProduct[]; 
  prodListOfCat:IProduct[] = [];
  @Output() totalPriceChange: EventEmitter<number>;
  orderTotalPrice:number = 0;
  // selectedCatID:number = 0;
  @Input() sentCatID:number = 0;


  // @ViewChild('itemsCount') icount!:ElementRef;

  constructor(private staticProductService:StaticProductsService, private router:Router) {
    this.totalPriceChange = new EventEmitter<number>();


    // this.prodList = [
    //   {id:1, name:'Hawaui', price: 10000, quantity: 1, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 1},
    //   {id:2, name:'Lenovo', price: 20000, quantity: 2, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 2},
    //   {id:3, name:'Hawaui', price: 14000, quantity: 0, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 1},
    //   {id:4, name:'Lenovo', price: 16000, quantity: 4, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 2},
    //   {id:5, name:'Hawaui', price: 30000, quantity: 6, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 1}
    //   ,{id:6, name:'Samsung', price: 15000, quantity: 5, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 3}
    // ];
    

    // this.prodListOfCat = this.prodList;
    
    this.OrderDate = new Date();
  }
  ngOnChanges(): void {
    // this.filterProductsByCatID();
    this.prodListOfCat = this.staticProductService.getProductsByCatID(this.sentCatID);
  }
  ngOnInit(): void {
    this.prodListOfCat = this.staticProductService.getAllProducts();
  }

  buy(prodPrice:number, count:any)
  {
    // let itemsCount:number = count;
    // let itemsCount:number;
    // this.orderTotalPrice = parseInt(count) * prodPrice;
    // itemsCount = Number(count);
    // itemsCount = count as number;
    this.orderTotalPrice += +count * prodPrice;

    this.totalPriceChange.emit(this.orderTotalPrice); // emit = execute
  }

  openProdDetails(prodID:number)
  {
    // this.router.navigateByUrl('/Products/' + prodID);
    this.router.navigate(['/Products', prodID]); // navigate return promise
  }

  // remove()
  // {
  //   this.icount.nativeElement.value = 0;
  // }

  // private filterProductsByCatID()
  // {
  //   if(this.sentCatID == 0)
  //     this.prodListOfCat = this.prodList;
  //   else
  //     this.prodListOfCat = this.prodList.filter(prod => prod.categoryID == this.sentCatID);
  // }

  // changeCat()
  // {
  //   this.selectedCatID = 1;
  // }

  prodTrackByFun(index:number, prod:IProduct):number
  {
    return prod.id;
  }


}
