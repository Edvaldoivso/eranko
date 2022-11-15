import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class ModalServiceService {
  constructor(private router : Router) {}

  public OpenModal() {
    const objetomodal = document.getElementById('overlay');
    objetomodal!.style.display = 'block';
  }

  public fecharmodal() {
    const objetomodal = document.getElementById('overlay');
    document.location.reload();
     setTimeout(() => {
      objetomodal!.style.display = 'none';
    }, 300);
  }
}
