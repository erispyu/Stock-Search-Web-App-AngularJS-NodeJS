import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartStockSearchComponent } from './high-chart-stock-search.component';

describe('HighChartStockSearchComponent', () => {
  let component: HighChartStockSearchComponent;
  let fixture: ComponentFixture<HighChartStockSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighChartStockSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartStockSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
