import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketsListComponent } from './supermarkets-list.component';
import { SupermarketBaseSpec } from '../../core/supermarket.base.spec';
import { SorterService } from '../../core/sorter.service';

describe('SupermarketsListComponent', () => {
  let component: SupermarketsListComponent;
  let mockSorterService;
  let fixture: ComponentFixture<SupermarketsListComponent>;
  const supermarketBaseSpec = new SupermarketBaseSpec();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermarketsListComponent ],
      providers: [SorterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockSorterService = jasmine.createSpyObj(['sort']);
  });

  it('should display a list of supermarkets', () => {
    const compiled = fixture.debugElement.nativeElement;

    component.supermarkets = supermarketBaseSpec.createCollectionSortedById();
    fixture.detectChanges();

    expect(compiled.querySelector('table.supermarket-list')).toBeTruthy();
    expect(compiled.querySelector('th.supermarket-id').textContent).toEqual('Id');
    expect(compiled.querySelector('th.supermarket-name').textContent).toEqual('Name');
    expect(compiled.querySelector('th.supermarket-address').textContent).toEqual('Address');

    expect(compiled.querySelector('td')).toBeTruthy();

  });

  it('should allow sorting the list', () => {
    const sortedCollection = supermarketBaseSpec.createCollectionSortedById();
    component.supermarkets = supermarketBaseSpec.createUnsortedCollection();
    mockSorterService.sort.and.returnValue(sortedCollection);

    component.sort('id');

    expect(component.filteredSupermarkets).toEqual(sortedCollection);
  });
});
