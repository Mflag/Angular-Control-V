import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from 'src/components/main/main.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { AddProductsComponent } from 'src/components/addProducts/addProducts.component';
import { CatalogoComponent } from 'src/components/catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AddProductsComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
