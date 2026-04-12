import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmSlider } from './bpm-slider';

describe('BpmSlider', () => {
  let component: BpmSlider;
  let fixture: ComponentFixture<BpmSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpmSlider],
    }).compileComponents();

    fixture = TestBed.createComponent(BpmSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
