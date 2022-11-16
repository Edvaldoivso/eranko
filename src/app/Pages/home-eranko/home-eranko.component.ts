import { Component, OnInit } from '@angular/core';
import { AudioplayService } from 'src/app/services/audioplay.service';
import { ModalServiceService } from 'src/app/services/Modal/modal-service.service';

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
    'beijaflor',
    'sabia',
    'piriquito',
  ];
  public animalcard: any;

  constructor(
    public audioplay: AudioplayService,
    public openmodal: ModalServiceService
  ) {}

  ngOnInit(): void {}

  public selecionaanimal(animals: string) {

    this.animalcard = animals

  }

  public tocarsom(animals : any){
    this.audioplay.audioservice(animals);
    this.openmodal.OpenModal();
  }
}
