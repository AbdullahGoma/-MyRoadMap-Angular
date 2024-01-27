import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({ // To do it run by Dependence Injection
  providedIn: 'root' // Singleton(Shared Object on all project)
})
export class StaticProductsService {
  prodList:IProduct[];

  constructor() { 
    this.prodList = [
      {id:1, name:'Hawaui', price: 10000, quantity: 1, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 1},
      {id:2, name:'Lenovo', price: 20000, quantity: 2, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 2},
      {id:3, name:'Hawaui', price: 14000, quantity: 0, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 1},
      {id:4, name:'Lenovo', price: 16000, quantity: 4, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 2},
      {id:5, name:'Hawaui', price: 30000, quantity: 6, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 1}
      ,{id:6, name:'Samsung', price: 15000, quantity: 5, imgURL: 'https://fakeimg.pl/200x100/', categoryID: 3}
    ];
  }

  getAllProducts() : IProduct[]
  {
    return this.prodList;
  }

  getProductsByCatID(cID:number) : IProduct[]
  {
    if(cID == 0)
      return this.prodList;
    else
      return this.prodList.filter(prod => prod.categoryID == cID);
  }

  getProductByID(pID:number) : IProduct | null
  {
    let foundProd = this.prodList.find(prod => prod.id == pID);
    return foundProd? foundProd : null;
  }

  addNewProdut(prod:IProduct)
  {
    this.prodList.push(prod);
  }

  getProdIDs() : number[]
  {
    let prodIDs:number[] = this.prodList.map(prod => prod.id);
    return prodIDs;
  }

}
