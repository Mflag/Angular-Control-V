import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from 'src/components/addProducts/addProducts.component';
import { CatalogoComponent } from 'src/components/catalogo/catalogo.component';
import { MainComponent } from 'src/components/main/main.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'addProducts', component:AddProductsComponent
  } ,
  {
    path: 'catalogo' , component: CatalogoComponent
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
