export class SupermarketBaseSpec {

  constructor() { }

  createUnsortedCollection() {
    return [
      {
        'id': 2,
        'name': 'Macromix',
        'address': '1234 Anywhere St',
        'rating': 2,
        'favorite': true,
        'priceRange': 'Expensive',
        'notes': 'Some notes here and here and here'
      },
      {
        'id': 1,
        'name': 'Bourboun',
        'address': '1234 Somewhere St',
        'rating': 1,
        'favorite': true,
        'priceRange': 'Expensive',
        'notes': 'Some notes here and here and here'
      },
      {
        'id': 3,
        'name': 'Bosque',
        'address': '4567 Everywhere St',
        'rating': 3,
        'favorite': true,
        'priceRange': 'Expensive',
        'notes': 'Some notes here and here and here'
      }
    ];
  }

  createCollectionSortedById() {
    return [
      {
        'id': 1,
        'name': 'Bourboun',
        'address': '1234 Somewhere St',
        'rating': 1,
        'favorite': true,
        'priceRange': 'Expensive',
        'notes': 'Some notes here and here and here'
      },
      {
        'id': 2,
        'name': 'Macromix',
        'address': '1234 Anywhere St',
        'rating': 2,
        'favorite': true,
        'priceRange': 'Expensive',
        'notes': 'Some notes here and here and here'
      },
      {
        'id': 3,
        'name': 'Bosque',
        'address': '4567 Everywhere St',
        'rating': 3,
        'favorite': true,
        'priceRange': 'Expensive',
        'notes': 'Some notes here and here and here'
      }
    ];
  }

  createCollectionSortedByName() {
    return [
      {
        'id': 3,
        'name': 'Bosque',
        'address': '4567 Everywhere St',
        'rating': 3,
        'favorite': true,
        'priceRange': 'Expensive',
        'notes': 'Some notes here and here and here'
      },
      {
        'id': 1,
        'name': 'Bourboun',
        'address': '1234 Somewhere St',
        'rating': 1,
        'favorite': true,
        'priceRange': 'Expensive',
        'notes': 'Some notes here and here and here'
      },
      {
        'id': 2,
        'name': 'Macromix',
        'address': '1234 Anywhere St',
        'rating': 2,
        'favorite': true,
        'priceRange': 'Expensive',
        'notes': 'Some notes here and here and here'
      }
    ];
  }

  createReversedCollectionSortedById() {
    return [
      {
        'id': 3,
        'name': 'Bosque',
        'address': '4567 Everywhere St',
        'rating': 3,
        'favorite': true,
        'priceRange': 'Expensive',
        'notes': 'Some notes here and here and here'
      },
      {
        'id': 2,
        'name': 'Macromix',
        'address': '1234 Anywhere St',
        'rating': 2,
        'favorite': true,
        'priceRange': 'Expensive',
        'notes': 'Some notes here and here and here'
      },
      {
        'id': 1,
        'name': 'Bourboun',
        'address': '1234 Somewhere St',
        'rating': 1,
        'favorite': true,
        'priceRange': 'Expensive',
        'notes': 'Some notes here and here and here'
      }
    ];
  }
}
