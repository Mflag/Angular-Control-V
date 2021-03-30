import { Component, OnInit } from '@angular/core';
import { StickerServiceService } from '../../services/stickerService.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-addProducts',
  templateUrl: './addProducts.component.html',
  styleUrls: ['./addProducts.component.scss']
})
export class AddProductsComponent implements OnInit {

  public sticker!: {};
  
  formGroup = new FormGroup({
  name: new FormControl('', Validators.required),
  cod: new FormControl('', Validators.required),
  seccion: new FormControl('', Validators.required),
  imagen: new FormControl('', Validators.required)
  
  });
  
   

  constructor(private stickerService: StickerServiceService) { }

  ngOnInit() {
    this.stickerService.stickerGet().subscribe(data =>this.sticker = data);
    console.log(this.sticker)
  }
  create(){
    this.stickerService.stickerPost(this.formGroup.value)
    .subscribe(
      res =>{
        console.log(res);
      },
      err => console.log(this.formGroup)
    )
  }

 

}
