import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioplayService {
  private instanciaaudio: any = '';
  constructor() {}

  public audioservice(url: string) {
    this.instanciaaudio = new Audio('../../../assets/Sounds/' + url + '.mp3');

    (() => {
      this.instanciaaudio.play();
    })();
  }
}
