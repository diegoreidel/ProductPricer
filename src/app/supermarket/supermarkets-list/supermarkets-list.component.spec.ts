import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketsListComponent } from './supermarkets-list.component';
import { createSupermarkets } from '../../shared/shared.spec';

describe('SupermarketsListComponent', () => {
  let component: SupermarketsListComponent;
  let fixture: ComponentFixture<SupermarketsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermarketsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a list of supermarkets', () => {
    const compiled = fixture.debugElement.nativeElement;

    component.supermarkets = createSupermarkets();
    fixture.detectChanges();

    expect(compiled.querySelector('table.supermarket-list')).toBeTruthy();
    expect(compiled.querySelector('th.supermarket-id').textContent).toEqual('Id');
    expect(compiled.querySelector('th.supermarket-name').textContent).toEqual('Name');
    expect(compiled.querySelector('th.supermarket-address').textContent).toEqual('Address');

    expect(compiled.querySelector('td')).toBeTruthy();

  });
});
