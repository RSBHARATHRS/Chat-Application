import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BGroupComponent } from './b-group.component';

describe('BGroupComponent', () => {
  let component: BGroupComponent;
  let fixture: ComponentFixture<BGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
