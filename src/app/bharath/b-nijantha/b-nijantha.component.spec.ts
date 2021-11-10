import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BNijanthaComponent } from './b-nijantha.component';

describe('BNijanthaComponent', () => {
  let component: BNijanthaComponent;
  let fixture: ComponentFixture<BNijanthaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BNijanthaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BNijanthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
