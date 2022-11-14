import { Component, OnInit } from '@angular/core';
import { AudioplayService } from 'src/app/services/audioplay.service';

@Component({
  selector: 'home-eranko',
  templateUrl: './home-eranko.component.html',
  styleUrls: ['./home-eranko.component.scss'],
})
export class HomeErankoComponent implements OnInit {
  public card: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public animal: Array<string> = [
    'codorna',
    'amazona',
    'gato',
    'cachorro',
    'tucano',
    'beija-flor',
    'sabia',
    'piriquito',
  ];
  public audioinstance: any;

  constructor(public audioplay: AudioplayService) {}

  ngOnInit(): void {}

  public playsom(animals: string) {
    this.audioplay.audioservice(animals);
    setTimeout(()=>{this.audioplay.pararplay()} , 7000)
  }


}
