import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LGroupComponent } from './l-group.component';

describe('LGroupComponent', () => {
  let component: LGroupComponent;
  let fixture: ComponentFixture<LGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
