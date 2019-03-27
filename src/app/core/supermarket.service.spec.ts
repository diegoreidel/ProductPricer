import { async } from '@angular/core/testing';
import { of } from 'rxjs';

import { SupermarketService } from './supermarket.service';
import { Supermarket } from '../shared/interfaces';
import { SupermarketBaseSpec } from './supermarket.base.spec';

describe('SupermarketService', () => {

  let supermarketService: SupermarketService;
  let mockHttp;
  let supermarkets:  Supermarket[];
  const supermarketBaseSpec = new SupermarketBaseSpec();

  describe('getSupermarkets', () => {

    beforeEach(() => {
      mockHttp = jasmine.createSpyObj(['get']);
      supermarketService = new SupermarketService(mockHttp);
      supermarkets = supermarketBaseSpec.createCollectionSortedById();
    });

    it('should retrieve all supermarkets in the mock file', async(() => {
      mockHttp.get.and.returnValue(of(supermarkets));
      supermarketService.getSupermarkets()
        .subscribe(result => expect(result.length).toEqual(supermarkets.length));
    }));
  });
});

