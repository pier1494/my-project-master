import { TestBed } from '@angular/core/testing';

import { ModificarecensioniService } from './modificarecensioni.service';

describe('ModificarecensioniService', () => {
  let service: ModificarecensioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarecensioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
