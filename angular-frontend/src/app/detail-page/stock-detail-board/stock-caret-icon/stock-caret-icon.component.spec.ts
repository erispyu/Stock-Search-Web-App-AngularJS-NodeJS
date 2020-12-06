import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCaretIconComponent } from './stock-caret-icon.component';

describe('StockCaretIconComponent', () => {
  let component: StockCaretIconComponent;
  let fixture: ComponentFixture<StockCaretIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCaretIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCaretIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
