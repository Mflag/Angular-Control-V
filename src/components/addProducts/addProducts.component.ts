import { Component, OnInit } from '@angular/core';
import { StickerServiceService } from '../../services/stickerService.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-addProducts',
  templateUrl: './addProducts.component.html',
  styleUrls: ['./addProducts.component.scss']
})
export class AddProductsComponent implements OnInit {

  
  formGroup = new FormGroup({
  name: new FormControl('', Validators.required),
  size: new FormControl('', Validators.required),
  cod: new FormControl('', Validators.required),
  seccion: new FormControl('', Validators.required)
  
  });
  
   

  constructor(private stickerService: StickerServiceService/*,
              private formBuilder: FormBuilder,*/
              
              ) { }

  ngOnInit() {/*this.formGroup = this.formBuilder.group({name: ['', Validators.required], size:['', Validators.required], cod:['', Validators.required], seccion: ['', Validators.required]     })
  */}
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
