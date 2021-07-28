import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { UsuarioComponent } from './usuario.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';

describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;
  let store: MockStore;
  let router: Router;

  const userInitialState = {
    id: '',
    user: {'':''},
    loaded: false,
    loading: false,
    error: null
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState: { usuario: userInitialState }})
      ],
      }).compileComponents();
      store = TestBed.inject(MockStore);
      router = TestBed.inject(Router)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should create', () => {
    store.setState(userInitialState);
    expect(component).toBeTruthy();
  });


  it('should set the data usuario', fakeAsync(() => {
    component.ngOnInit();
    tick(4000);
    expect(component.usuario).toBeTruthy();

  }))

});
