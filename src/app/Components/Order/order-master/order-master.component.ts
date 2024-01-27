import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements AfterViewInit {
  catList:ICategory[];
  selectedCatID:number = 0;
  receivedOrderTotalPrice:number = 0;

  // clientNameInpElem: ElementRef = new ElementRef();

  // clientNameInpElem: ElementRef = {} as ElementRef;

  // clientNameInpElem: ElementRef | undefined = undefined;

  // clientNameInpElem: ElementRef | null = null;
  
  // clientNameInpElem?:ElementRef; //Optional

  @ViewChild('clientNameInp') clientNameInpElem!: ElementRef; // Non-null asseration operator
  @ViewChild(ProductListComponent) prodListCompObj!: ProductListComponent;


  constructor() {
    this.catList = [
      {id:1, name:'hawaui'},
      {id:2, name:'Lenovo'},
      {id:3, name:'Samsung'}
    ];
  }
  ngAfterViewInit(): void {
    this.clientNameInpElem.nativeElement.value = "Your Name Here";
    this.clientNameInpElem.nativeElement.style.border = "2px solid red";
    // this.prodListCompObj.prodList;
  }

  onTotalPriceChanged(totalPrice:number)
  {
    this.receivedOrderTotalPrice = totalPrice;
  }

  completeOrder()
  {
    // For test
    // this.prodListCompObj.prodList[0].quantity -= 1;
  }

}
