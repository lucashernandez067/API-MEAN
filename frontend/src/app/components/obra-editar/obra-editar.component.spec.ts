import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraEditarComponent } from './obra-editar.component';

describe('ObraEditarComponent', () => {
  let component: ObraEditarComponent;
  let fixture: ComponentFixture<ObraEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObraEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
