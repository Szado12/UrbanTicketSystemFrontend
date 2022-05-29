import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulBuyComponent } from './successful-buy.component';

describe('SuccessfulBuyComponent', () => {
  let component: SuccessfulBuyComponent;
  let fixture: ComponentFixture<SuccessfulBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
