import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresDbComponent } from './autores-db.component';

describe('AutoresDbComponent', () => {
  let component: AutoresDbComponent;
  let fixture: ComponentFixture<AutoresDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoresDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
