import { of } from 'rxjs';

import { SupermarketsComponent } from './supermarkets.component';
import { Supermarket } from '../shared/interfaces';
import { SupermarketBaseSpec } from '../core/supermarket.base.spec';

describe('SupermarketComponent', () => {
  let component: SupermarketsComponent;
  let mockSupermarketService;
  let supermarkets:  Supermarket[];
  const supermarketBaseSpec = new SupermarketBaseSpec();

  beforeEach(() => {
    mockSupermarketService = jasmine.createSpyObj(['getSupermarkets']);
    component = new SupermarketsComponent(mockSupermarketService);
    supermarkets = supermarketBaseSpec.createCollectionSortedById();
  });

  describe('onInit', () => {
    it('should populate supermarkets ', () => {
      mockSupermarketService.getSupermarkets.and.returnValue(of(supermarkets));
      component.ngOnInit();
      expect(component.supermarkets.length).toBe(supermarkets.length);
    });

    it('should call getSupermarkets ', () => {
      mockSupermarketService.getSupermarkets.and.returnValue(of(supermarkets));
      component.ngOnInit();
      expect(mockSupermarketService.getSupermarkets).toHaveBeenCalled();
    });
  });
});
