import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetuserComponent } from './getuser.component';

describe('GetuserComponent', () => {
  let component: GetuserComponent;
  let fixture: ComponentFixture<GetuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetuserComponent]
    });
    fixture = TestBed.createComponent(GetuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
