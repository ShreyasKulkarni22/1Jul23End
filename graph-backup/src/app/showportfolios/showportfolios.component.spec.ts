import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowportfoliosComponent } from './showportfolios.component';

describe('ShowportfoliosComponent', () => {
  let component: ShowportfoliosComponent;
  let fixture: ComponentFixture<ShowportfoliosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowportfoliosComponent]
    });
    fixture = TestBed.createComponent(ShowportfoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
