import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RequestInfo } from 'angular-in-memory-web-api/interfaces';

import { Supermarket } from '../shared/interfaces';

export class InMemorySupermarketService implements InMemoryDbService {
  createDb() {
    const supermarkets = [{
          'id': 1,
          'name': 'Diego Reidel',
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
    return {supermarkets};
  }

  post(requestInfo: RequestInfo) {
    if (requestInfo.collectionName === 'supermarkets') {
        return this.postSupermarket(requestInfo);
    }
    return undefined;
  }

  private postSupermarket(requestInfo: RequestInfo) {
    return requestInfo.utils.createResponse$(() => {
        const { headers, url, req } = requestInfo;
        const supermarket: Supermarket = requestInfo.utils.getJsonBody(req) || {};
        return {
            status: 200,
            headers,
            url,
            body: supermarket
        };
    });
  }
}
