import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeNumberComponent } from './merge-number.component';

describe('MergeNumberComponent', () => {
  let component: MergeNumberComponent;
  let fixture: ComponentFixture<MergeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
