import { SorterService } from './sorter.service';
import { Supermarket } from '../shared/interfaces';

describe('sorterService', () => {

  let sorterService: SorterService;
  let unsortedCollection: Supermarket[];

  describe('sort', () => {
    beforeEach(() => {
      sorterService = new SorterService();
      unsortedCollection = createUnsortedCollection();
    });

    it('should return an empty collection when an empty collection is provided', () => {
      expect(sorterService.sort([], 'id')).toEqual([]);
    });

    it('should be able to sort supermarkets by Id', () => {
      expect(sorterService.sort(unsortedCollection, 'id')).toEqual(createCollectionSortedById());
    });

    it('should be able to sort supermarkets by Name', () => {
      expect(sorterService.sort(unsortedCollection, 'name')).toEqual(createCollectionSortedByName());
    });
  });

  function createUnsortedCollection() {
    return [
      {
        'id': 2,
        'name': 'Macromix',
        'address': '1234 Anywhere St'
      },
      {
        'id': 1,
        'name': 'Bourboun',
        'address': '1234 Somewhere St'
      },
      {
        'id': 3,
        'name': 'Bosque',
        'address': '4567 Everywhere St'
      }
    ];
  }

  function createCollectionSortedById() {
    return [
      {
        'id': 1,
        'name': 'Bourboun',
        'address': '1234 Somewhere St'
      },
      {
        'id': 2,
        'name': 'Macromix',
        'address': '1234 Anywhere St'
      },
      {
        'id': 3,
        'name': 'Bosque',
        'address': '4567 Everywhere St'
      }
    ];
  }

  function createCollectionSortedByName() {
    return [
      {
        'id': 3,
        'name': 'Bosque',
        'address': '4567 Everywhere St'
      },
      {
        'id': 1,
        'name': 'Bourboun',
        'address': '1234 Somewhere St'
      },
      {
        'id': 2,
        'name': 'Macromix',
        'address': '1234 Anywhere St'
      }
    ];
  }
});


