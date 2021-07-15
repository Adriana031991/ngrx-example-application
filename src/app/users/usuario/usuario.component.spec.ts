import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { UsuarioComponent } from './usuario.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;
  let store: MockStore;
  const userInitialState = {
    id: '',
    user: {},
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    store.setState(userInitialState);
    expect(component).toBeTruthy();
  });
});
