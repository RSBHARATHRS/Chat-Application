import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NLokeshComponent } from './n-lokesh.component';

describe('NLokeshComponent', () => {
  let component: NLokeshComponent;
  let fixture: ComponentFixture<NLokeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NLokeshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NLokeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
