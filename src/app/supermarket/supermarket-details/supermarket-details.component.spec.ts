import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketDetailsComponent } from './supermarket-details.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('SupermarketDetailsComponent', () => {
  let component: SupermarketDetailsComponent;
  let fixture: ComponentFixture<SupermarketDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermarketDetailsComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
