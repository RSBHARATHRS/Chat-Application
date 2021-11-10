import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LBharathComponent } from './l-bharath.component';

describe('LBharathComponent', () => {
  let component: LBharathComponent;
  let fixture: ComponentFixture<LBharathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LBharathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LBharathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
