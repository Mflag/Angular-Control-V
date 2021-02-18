/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StickerServiceService } from './stickerService.service';

describe('Service: StickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StickerServiceService]
    });
  });

  it('should ...', inject([StickerServiceService], (service: StickerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
