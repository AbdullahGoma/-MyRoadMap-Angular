import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProdDetailsComponent } from './Components/Order/prod-details/prod-details.component';
import { authenticationGuard } from './Gaurds/authentication.guard';

const routes: Routes = [ // First Match Wins strategy
  { path: '', component: MainLayoutComponent, children: [ // because it contain route-outlet  
    { path:'', redirectTo: '/Home', pathMatch:'full'}, // Default Path
    { path: 'Home', component: HomeComponent }, 
    { path: 'Products', component: ProductListComponent },
    { path: 'Products/:pid', component: ProdDetailsComponent },
    { path: 'Order', component: OrderMasterComponent, canActivate:[authenticationGuard] }
  ] },
  { path: 'Login', component: UserLoginComponent },
  { path: 'Logout', component: UserLoginComponent },
  { path: '**', component: NotFoundComponent } // Wild Card Path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
