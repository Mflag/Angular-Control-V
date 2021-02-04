import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from 'src/components/addProducts/addProducts.component';
import { MainComponent } from 'src/components/main/main.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'addProducts', component:AddProductsComponent
  } ,
  {
    path: '**', redirectTo: 'main'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
