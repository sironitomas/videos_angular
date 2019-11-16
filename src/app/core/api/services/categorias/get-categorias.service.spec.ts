import { TestBed } from '@angular/core/testing';

import { GetCategoriasService } from './get-categorias.service';

describe('GetCategoriasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCategoriasService = TestBed.get(GetCategoriasService);
    expect(service).toBeTruthy();
  });
});
