import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasBuscarComponent } from './obras-buscar.component';

describe('ObrasBuscarComponent', () => {
  let component: ObrasBuscarComponent;
  let fixture: ComponentFixture<ObrasBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
