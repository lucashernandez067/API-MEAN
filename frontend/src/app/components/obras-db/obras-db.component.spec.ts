import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasDbComponent } from './obras-db.component';

describe('ObrasDbComponent', () => {
  let component: ObrasDbComponent;
  let fixture: ComponentFixture<ObrasDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
