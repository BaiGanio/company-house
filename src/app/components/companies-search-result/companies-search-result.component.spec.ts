import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesSearchResultComponent } from './companies-search-result.component';

describe('CompaniesSearchResultComponent', () => {
  let component: CompaniesSearchResultComponent;
  let fixture: ComponentFixture<CompaniesSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
