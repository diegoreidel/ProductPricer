import { async } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { SupermarketService } from './supermarket.service';
import { Supermarket } from '../shared/interfaces';
import { SupermarketBaseSpec } from './supermarket.base.spec';

describe('SupermarketService', () => {
  let supermarketService: SupermarketService;
  let mockHttp;
  let supermarkets: Supermarket[];
  const supermarketBaseSpec = new SupermarketBaseSpec();

  describe('getSupermarkets', () => {
    beforeEach(() => {
      mockHttp = jasmine.createSpyObj(['get', 'post']);
      supermarketService = new SupermarketService(mockHttp);
      supermarkets = supermarketBaseSpec.createCollectionSortedById();
    });

    it('should retrieve all supermarkets in the mock file', async(() => {
      mockHttp.get.and.returnValue(of(supermarkets));
      supermarketService
        .getSupermarkets()
        .subscribe(result =>
          expect(result.length).toEqual(supermarkets.length)
        );
    }));

    it('should show error messages when errors occur', async(() => {
      const err = { status: 400, message: 'error' };
      mockHttp.get.and.returnValue(throwError(err));
      supermarketService
        .getSupermarkets()
        .subscribe(
          () => fail('should fail'),
          error =>
            expect(error).toEqual(
              `Server returned code: ${err.status}, message is: ${err.message}`
            )
        );
    }));

    it('should post a new Supermarket', async(() => {
      mockHttp.post.and.returnValue(of(supermarkets));
      const supermarket: Supermarket = {
        id: 1,
        name: 'x',
        address: 'y',
        favorite: false,
        priceRange: 'z',
        rating: 3,
        notes: ''
      };
      supermarketService.postSupermarket(supermarket).subscribe();
    }));
  });
});
