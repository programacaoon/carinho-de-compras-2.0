import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaponesComponent } from './japones.component';

describe('JaponesComponent', () => {
  let component: JaponesComponent;
  let fixture: ComponentFixture<JaponesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaponesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
