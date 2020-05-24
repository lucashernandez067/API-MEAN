import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasCrearComponent } from './obras-crear.component';

describe('ObrasCrearComponent', () => {
  let component: ObrasCrearComponent;
  let fixture: ComponentFixture<ObrasCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
