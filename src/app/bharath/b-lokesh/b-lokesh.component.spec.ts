import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BLokeshComponent } from './b-lokesh.component';

describe('BLokeshComponent', () => {
  let component: BLokeshComponent;
  let fixture: ComponentFixture<BLokeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BLokeshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BLokeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
