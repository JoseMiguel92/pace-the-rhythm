import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaceComponent } from './pace';

describe('Pace', () => {
  let component: PaceComponent;
  let fixture: ComponentFixture<PaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
