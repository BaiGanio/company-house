import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCompaniesComponent } from './random-companies.component';

describe('RandomCompaniesComponent', () => {
  let component: RandomCompaniesComponent;
  let fixture: ComponentFixture<RandomCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
