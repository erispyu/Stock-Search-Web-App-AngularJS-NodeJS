import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDetailBoardComponent } from './stock-detail-board.component';

describe('StockDetailBoardComponent', () => {
  let component: StockDetailBoardComponent;
  let fixture: ComponentFixture<StockDetailBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDetailBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDetailBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
