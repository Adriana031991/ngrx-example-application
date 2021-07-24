import { async, getTestBed, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuarioService } from './usuario.service';
import { of } from 'rxjs';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let httpMock: HttpTestingController;

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
    httpMock= TestBed.inject(HttpTestingController);
  });

    afterEach(() => {
      httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return an Observable<Users[]>', () => {
    const dummyUser = [{id:1, userId:1, title: 'lorena', body: 'cuerpo'}];

    service.getUsers().subscribe((users:any) => {
      expect(users).toEqual(dummyUser);
    });

    const req = httpMock.expectOne("https://jsonplaceholder.typicode.com/posts");
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  })


});
