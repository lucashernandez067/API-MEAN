import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorEditarComponent } from './autor-editar.component';

describe('AutorEditarComponent', () => {
  let component: AutorEditarComponent;
  let fixture: ComponentFixture<AutorEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
