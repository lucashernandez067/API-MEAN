import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresCrearComponent } from './autores-crear.component';

describe('AutoresCrearComponent', () => {
  let component: AutoresCrearComponent;
  let fixture: ComponentFixture<AutoresCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoresCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
