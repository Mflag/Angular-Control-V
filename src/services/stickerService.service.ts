import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StickerServiceService 
{
  private URI = 'http://localhost:3000/api/sticker';

  constructor(private http: HttpClient, 
              private router: Router) { }

stickerGet() {

  return this.http.get(this.URI);

  }
  
  stickerPost(createSticker: any) {

    return this.http.post<any>(this.URI, createSticker);
  
  }

}
