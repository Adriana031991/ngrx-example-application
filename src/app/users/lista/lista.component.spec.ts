import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ListaComponent } from './lista.component';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;
  let store: MockStore;

  const people =
    [{
      users: {id: 1, userId: 1, title: 'hola', body: 'hola'},
      loaded: false,
      loading: false,
      error: null
    },
    {
      users: {id: 2, userId: 2, title: 'hola', body: 'hola'},
      loaded: false,
      loading: false,
      error: null
    }];

  const usersInitialState = {
    users: people,
    loaded: false,
    loading: false,
    error: null
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaComponent ],
      providers: [
        provideMockStore({ initialState: { usuarios: usersInitialState }},
        )
      ],
      })
    .compileComponents();

    store = TestBed.inject(MockStore);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    jasmine.clock().install();

  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loading be true', () => {
    expect(component.loading).toBeTruthy();
  });

  it('should loading be false after selector subscribe get usuarios Info', fakeAsync(() => {
    expect(component.loading).toBeTruthy();
    component.ngOnInit();
    tick(4000);
    expect(component.loading).toBeFalsy();
  }));


  it('should set the variable listComponent', fakeAsync(() => {
    tick(4000);
    expect(component.loading).toBeTruthy();
    expect(component.error).toBeFalsy();
    expect(component.usuarios).toBeTruthy();
  }))


  // -------///-------------------------
  it('should usuarios lenght eq userInitialState.users.length', () => {
    setTimeout(() => {
      store.setState(usersInitialState);
      const expected = usersInitialState.users.length;
      const result = fixture.componentInstance.usuarios.length;
      expect(expected).toEqual(result);
    }, 3000);
  });

  it('should loading be false after selector subscribe get usuarios Info', () => {
    setTimeout(() =>{
      expect(component.loading).toBeFalsy();
    }, 1000)
  });


  it('should error be true when the URL is not valid', () => {
    setTimeout(() =>{
      const expected = usersInitialState.error;
      const result = fixture.componentInstance.error
      expect(expected).toEqual(result);
    }, 1000)
  });



});
