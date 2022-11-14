import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioplayService {
  private instanciaaudio: any = '';
  constructor() {}

  public audioservice(url: string) {
    this.instanciaaudio = new Audio('../../../assets/Sounds/' + url + '.mp3');
    console.log('play acionado ' + url);

    (() => {
      this.instanciaaudio.play();
    })();
  }

  public pararplay() {
    this.instanciaaudio.pause();
    console.log('Parou Som');
  }
}
