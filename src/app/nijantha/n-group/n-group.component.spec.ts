import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGroupComponent } from './n-group.component';

describe('NGroupComponent', () => {
  let component: NGroupComponent;
  let fixture: ComponentFixture<NGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
