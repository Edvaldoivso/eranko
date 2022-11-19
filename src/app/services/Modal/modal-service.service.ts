import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AudioplayService } from '../audioplay.service';

@Injectable({
  providedIn: 'root',
})
export class ModalServiceService {
  constructor(private router: Router, public audioplay: AudioplayService) {}

  public OpenModal() {
    const objetomodal = document.getElementById('overlay');
    objetomodal!.style.display = 'block';
  }

  public fecharmodal() {
    this.audioplay.pararaudio();
    const objetomodal = document.getElementById('overlay');

    objetomodal!.style.display = 'none';
    this.router.navigate(['']);
  }
}
