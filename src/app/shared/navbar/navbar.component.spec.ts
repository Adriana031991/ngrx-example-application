import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  // let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
    // router = TestBed.inject(Router)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should navigate to usuario/id', () => {
  //   const spy = spyOn((component as any).router, 'navigate');
  //   component.irUsuario('id');
  //   expect(spy).toHaveBeenCalledWith(['/usuario','id']);

  // })

  describe('navigateExample', () => {
    it('navigate Example', () => {
        const routerstub: Router = TestBed.inject(Router);
        spyOn(routerstub, 'navigate');
        component.irUsuario('id');
    });
  });
});
