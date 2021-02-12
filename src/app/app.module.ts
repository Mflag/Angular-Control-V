import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from 'src/components/main/main.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { AddProductsComponent } from 'src/components/addProducts/addProducts.component';
import { CatalogoComponent } from 'src/components/catalogo/catalogo.component';
import { formatCurrency } from '@angular/common';
import { SingUpComponent} from 'src/components/singUp/singUp.component'


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AddProductsComponent,
    CatalogoComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
