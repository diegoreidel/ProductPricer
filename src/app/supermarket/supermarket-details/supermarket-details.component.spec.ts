import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketDetailsComponent } from './supermarket-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


describe('SupermarketDetailsComponent', () => {
  let component: SupermarketDetailsComponent;
  let fixture: ComponentFixture<SupermarketDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermarketDetailsComponent ],
      imports: [RouterTestingModule, FormsModule, HttpClientModule]
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
