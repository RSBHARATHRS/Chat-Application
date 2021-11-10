import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokeshComponent } from './lokesh.component';

describe('LokeshComponent', () => {
  let component: LokeshComponent;
  let fixture: ComponentFixture<LokeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LokeshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LokeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
