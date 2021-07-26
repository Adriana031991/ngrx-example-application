import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let httpMock: HttpTestingController;
  // let httpClientSpy: { get: jasmine.Spy };

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

  // beforeEach(() => {
  //   httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  //   service = new UsuarioService(httpClientSpy as any);
  // });


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

  it('should return an Observable<UsersById>', () => {
    const dummyUser2 = {id:'1', userId:'1', title: 'lorena', body: 'cuerpo'};

    service.getUserById('id').subscribe(users => {
      expect(users).toBe(dummyUser2.id);
    });
    const req = httpMock.expectOne("https://jsonplaceholder.typicode.com/posts/id");
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser2.id);
  })

});
