import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NBharathComponent } from './n-bharath.component';

describe('NBharathComponent', () => {
  let component: NBharathComponent;
  let fixture: ComponentFixture<NBharathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NBharathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NBharathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
