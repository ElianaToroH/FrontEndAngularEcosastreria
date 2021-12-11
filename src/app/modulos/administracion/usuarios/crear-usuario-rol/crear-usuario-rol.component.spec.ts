import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioRolComponent } from './crear-usuario-rol.component';

describe('CrearUsuarioRolComponent', () => {
  let component: CrearUsuarioRolComponent;
  let fixture: ComponentFixture<CrearUsuarioRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUsuarioRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
