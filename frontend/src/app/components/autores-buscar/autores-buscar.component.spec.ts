import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresBuscarComponent } from './autores-buscar.component';

describe('AutoresBuscarComponent', () => {
  let component: AutoresBuscarComponent;
  let fixture: ComponentFixture<AutoresBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoresBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
