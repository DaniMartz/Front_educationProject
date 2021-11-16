import { ModalService } from './modal.service';

/** Modal service test file written purely with jasmine framework.
 * Jasmine provides easy to read and write functions for testing
 */
let service: ModalService;
describe('ModalService', () => {
  beforeEach(() => {
    service = new ModalService();
  });

  it('should be opened a modal window', done => {
    service.isOpen.subscribe(value => {
      expect(value).toBe(1);
      done();
    });
    service.openModal();
  });

  it('should be closed a modal window', done => {
    service.isOpen.subscribe(value => {
      expect(value).toBe(0);
      done();
    });
    service.closeModal();
  });
});
