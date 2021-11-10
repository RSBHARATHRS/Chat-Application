import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LNijanthaComponent } from './l-nijantha.component';

describe('LNijanthaComponent', () => {
  let component: LNijanthaComponent;
  let fixture: ComponentFixture<LNijanthaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LNijanthaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LNijanthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
