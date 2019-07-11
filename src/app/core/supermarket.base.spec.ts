export class SupermarketBaseSpec {

  constructor() { }

  createUnsortedCollection() {
    return [
      {
        'id': 2,
        'name': 'Macromix',
        'address': '1234 Anywhere St',
        'rating': 2
      },
      {
        'id': 1,
        'name': 'Bourboun',
        'address': '1234 Somewhere St',
        'rating': 1
      },
      {
        'id': 3,
        'name': 'Bosque',
        'address': '4567 Everywhere St',
        'rating': 3
      }
    ];
  }

  createCollectionSortedById() {
    return [
      {
        'id': 1,
        'name': 'Bourboun',
        'address': '1234 Somewhere St',
        'rating': 1
      },
      {
        'id': 2,
        'name': 'Macromix',
        'address': '1234 Anywhere St',
        'rating': 2
      },
      {
        'id': 3,
        'name': 'Bosque',
        'address': '4567 Everywhere St',
        'rating': 3
      }
    ];
  }

  createCollectionSortedByName() {
    return [
      {
        'id': 3,
        'name': 'Bosque',
        'address': '4567 Everywhere St',
        'rating': 3
      },
      {
        'id': 1,
        'name': 'Bourboun',
        'address': '1234 Somewhere St',
        'rating': 1
      },
      {
        'id': 2,
        'name': 'Macromix',
        'address': '1234 Anywhere St',
        'rating': 2
      }
    ];
  }

  createReversedCollectionSortedById() {
    return [
      {
        'id': 3,
        'name': 'Bosque',
        'address': '4567 Everywhere St',
        'rating': 3
      },
      {
        'id': 2,
        'name': 'Macromix',
        'address': '1234 Anywhere St',
        'rating': 2
      },
      {
        'id': 1,
        'name': 'Bourboun',
        'address': '1234 Somewhere St',
        'rating': 1
      }
    ];
  }
}
