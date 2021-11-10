import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NijanthaComponent } from './nijantha.component';

describe('NijanthaComponent', () => {
  let component: NijanthaComponent;
  let fixture: ComponentFixture<NijanthaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NijanthaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NijanthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
