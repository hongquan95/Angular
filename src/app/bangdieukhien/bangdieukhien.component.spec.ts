import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangdieukhienComponent } from './bangdieukhien.component';

describe('BangdieukhienComponent', () => {
  let component: BangdieukhienComponent;
  let fixture: ComponentFixture<BangdieukhienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangdieukhienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangdieukhienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
