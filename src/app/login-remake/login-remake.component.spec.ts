import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRemakeComponent } from './login-remake.component';

describe('LoginRemakeComponent', () => {
  let component: LoginRemakeComponent;
  let fixture: ComponentFixture<LoginRemakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRemakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRemakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
