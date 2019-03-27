import { SorterService } from './sorter.service';
import { Supermarket } from '../shared/interfaces';
import { SupermarketBaseSpec } from './supermarket.base.spec';

describe('SorterService', () => {

  let sorterService: SorterService;
  let unsortedCollection: Supermarket[];
  const supermarketBaseSpec = new SupermarketBaseSpec();

  describe('sort', () => {

    beforeEach(() => {
      sorterService = new SorterService();
      unsortedCollection = supermarketBaseSpec.createUnsortedCollection();
    });

    it('should return an empty collection when an empty collection is provided', () => {
      expect(sorterService.sort([], 'id')).toEqual([]);
    });

    it('should be able to sort supermarkets by Id', () => {
      expect(sorterService.sort(unsortedCollection, 'id')).toEqual(supermarketBaseSpec.createCollectionSortedById());
    });

    it('should be able to sort supermarkets by Name', () => {
      expect(sorterService.sort(unsortedCollection, 'name')).toEqual(supermarketBaseSpec.createCollectionSortedByName());
    });

    it('should be able to reverse an already sorted collection', () => {
      expect(sorterService.sort(supermarketBaseSpec.createCollectionSortedById(), 'id', 'reverse'))
        .toEqual(supermarketBaseSpec.createReversedCollectionSortedById());
    });
  });
});


