import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirst2Component } from './my-first2.component';

describe('MyFirst2Component', () => {
  let component: MyFirst2Component;
  let fixture: ComponentFixture<MyFirst2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirst2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirst2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
