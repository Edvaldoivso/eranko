import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-eranko',
  templateUrl: './home-eranko.component.html',
  styleUrls: ['./home-eranko.component.scss'],
})
export class HomeErankoComponent implements OnInit {
  public card: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public animal: Array<string> = [
    'Codorna',
    'Papagaio',
    'Gato',
    'Cachorro',
    'Tucano',
    'Beija-Flor',
    'Sabia',
    'Piriquito',
    
  ];
  constructor() {}

  ngOnInit(): void {}


public chamasecao(animals : string){
  window.alert('Chamou' + animals)
}



}
