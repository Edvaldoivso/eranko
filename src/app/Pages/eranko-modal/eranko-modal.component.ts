import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/services/Modal/modal-service.service';

@Component({
  selector: 'app-eranko-modal',
  templateUrl: './eranko-modal.component.html',
  styleUrls: ['./eranko-modal.component.scss'],
})
export class ErankoModalComponent implements OnInit {
  constructor(public modalservice : ModalServiceService) {}

  ngOnInit(): void {}

  fecharmodal() {
    this.modalservice.fecharmodal()
  }
  
}
