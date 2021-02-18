import { Component, OnInit } from '@angular/core';
import { StickerServiceService } from '../../services/stickerService.service'

@Component({
  selector: 'app-addProducts',
  templateUrl: './addProducts.component.html',
  styleUrls: ['./addProducts.component.scss']
})
export class AddProductsComponent implements OnInit {

  constructor(private stickerService: StickerServiceService) { }

  ngOnInit() {
  }
  create(){
    
  }

}
