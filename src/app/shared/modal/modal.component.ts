import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ModalService } from 'src/app/shared/services/modal-service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() clickOutside = new EventEmitter();
  @Input() title: string;

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  toggle() {
    this.modalService.closeModal();
    this.clickOutside.emit();
  }
}
