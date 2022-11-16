import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eranko-card',
  templateUrl: './eranko-card.component.html',
  styleUrls: ['./eranko-card.component.scss'],
})
export class ErankoCardComponent implements OnInit {
  @Input() public tipoanimal: string = 'Animal ?';

  constructor() {}

  ngOnInit(): void {}
}
