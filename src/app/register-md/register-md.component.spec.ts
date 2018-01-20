import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMdComponent } from './register-md.component';

describe('RegisterMdComponent', () => {
  let component: RegisterMdComponent;
  let fixture: ComponentFixture<RegisterMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
