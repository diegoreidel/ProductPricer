export class SupermarketBaseSpec {

  constructor() { }

  createUnsortedCollection() {
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

  createCollectionSortedById() {
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

  createCollectionSortedByName() {
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

  createReversedCollectionSortedById() {
    return [
      {
        'id': 3,
        'name': 'Bosque',
        'address': '4567 Everywhere St'
      },
      {
        'id': 2,
        'name': 'Macromix',
        'address': '1234 Anywhere St'
      },
      {
        'id': 1,
        'name': 'Bourboun',
        'address': '1234 Somewhere St'
      }
    ];
  }
}
