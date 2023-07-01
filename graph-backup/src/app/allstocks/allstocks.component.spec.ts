import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstocksComponent } from './allstocks.component';

describe('AllstocksComponent', () => {
  let component: AllstocksComponent;
  let fixture: ComponentFixture<AllstocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllstocksComponent]
    });
    fixture = TestBed.createComponent(AllstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
