import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
    ],
    providers: [
      UsuarioService,
    ], 
       
    });

    service = TestBed.inject(UsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create', async(inject([HttpTestingController, UsuarioService],
    (httpClient: HttpTestingController, apiService: UsuarioService) => {
      expect(apiService).toBeTruthy();
  })));
});
