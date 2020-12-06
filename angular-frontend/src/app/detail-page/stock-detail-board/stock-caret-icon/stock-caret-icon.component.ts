import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-caret-icon',
  templateUrl: './stock-caret-icon.component.html',
  styleUrls: ['./stock-caret-icon.component.css']
})
export class StockCaretIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isPositive: boolean
}
