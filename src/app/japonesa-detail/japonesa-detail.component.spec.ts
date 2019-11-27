import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaponesaDetailComponent } from './japonesa-detail.component';

describe('JaponesaDetailComponent', () => {
  let component: JaponesaDetailComponent;
  let fixture: ComponentFixture<JaponesaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaponesaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaponesaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
