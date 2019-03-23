import { SupermarketService } from './supermarket.service';
import { Observable, of } from 'rxjs';
import { Supermarket } from '../shared/interfaces';
import { createSupermarkets } from '../shared/shared.spec';

describe('SupermarketService', () => {

  let supermarketService: SupermarketService;
  let mockHttp;
  let supermarkets:  Supermarket[];
  let returnedSupermarkets:  Supermarket[];

  describe('getSupermarkets', () => {
    beforeEach(() => {
      mockHttp = jasmine.createSpyObj(['get']);
      supermarketService = new SupermarketService(mockHttp);
      supermarkets = createSupermarkets();
    });
    it('should retrieve all supermarkets in the mock file', function () {
      mockHttp.get.and.returnValue(of(supermarkets));
      supermarketService.getSupermarkets()
        .subscribe((s: Supermarket[]) => this.returnedSupermarkets = s);
      expect(this.returnedSupermarkets.length).toEqual(supermarkets.length);
    });
  });
});
