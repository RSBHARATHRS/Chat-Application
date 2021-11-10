import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BharathComponent } from './bharath.component';

describe('BharathComponent', () => {
  let component: BharathComponent;
  let fixture: ComponentFixture<BharathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BharathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BharathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
