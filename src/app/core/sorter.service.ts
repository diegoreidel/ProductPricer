export class SorterService {

  sort(collection: any[], prop: any) {
    return collection.sort((a: any, b: any) => {
      const attributeValue = this.getAttributeValue(a, prop);
      if (typeof attributeValue === 'string' || attributeValue instanceof String) {
        return this.compareStrings(a, b, prop);
      }
      return this.getAttributeValue(a, prop) - this.getAttributeValue(b, prop);
    });
  }

  private getAttributeValue(object: any, attribute: any) {
    return object[attribute];
  }
  private compareStrings(objectA: any, objectB: any, prop: any) {
    return (this.getAttributeValue(objectA, prop)).localeCompare(this.getAttributeValue(objectB, prop));
  }
}
