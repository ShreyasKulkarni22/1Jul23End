import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockdetailsComponent } from './viewstockdetails.component';

describe('ViewstockdetailsComponent', () => {
  let component: ViewstockdetailsComponent;
  let fixture: ComponentFixture<ViewstockdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewstockdetailsComponent]
    });
    fixture = TestBed.createComponent(ViewstockdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
