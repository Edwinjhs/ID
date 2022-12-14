import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarempresaComponent } from './iniciarempresa.component';

describe('IniciarempresaComponent', () => {
  let component: IniciarempresaComponent;
  let fixture: ComponentFixture<IniciarempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarempresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciarempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
