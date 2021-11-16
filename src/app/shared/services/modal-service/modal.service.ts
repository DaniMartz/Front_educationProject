import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/** A popup window service */
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isOpen: Subject<number> = new Subject<number>();
  constructor() {}
  closeModal() {
    this.isOpen.next(0);
  }
  openModal() {
    this.isOpen.next(1);
  }
}
