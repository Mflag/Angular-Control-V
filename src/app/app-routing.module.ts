import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from 'src/components/addProducts/addProducts.component';
import { CatalogoComponent } from 'src/components/catalogo/catalogo.component';
import { LoginComponent } from 'src/components/login/login.component';
import { MainComponent } from 'src/components/main/main.component';
import { SingUpComponent } from 'src/components/singUp/singUp.component';

const routes: Routes = [
  {
    path: 'main', 
    component: MainComponent
  },
  {
    path: 'addProducts', 
    component:AddProductsComponent
  } ,
  {
    path: 'catalogo' , 
    component: CatalogoComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'singUp', 
    component: SingUpComponent    
  },
  {
    path: '**', redirectTo: 'main'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
