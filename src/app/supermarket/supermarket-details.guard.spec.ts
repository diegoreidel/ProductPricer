import { TestBed, async, inject } from '@angular/core/testing';

import { SupermarketDetailsGuard } from './supermarket-details.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('SupermarketDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [SupermarketDetailsGuard]
    });
  });

  it('should ...', inject([SupermarketDetailsGuard], (guard: SupermarketDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
