import { Component, input, output } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bpm-slider',
  imports: [MatSliderModule, FormsModule],
  templateUrl: './bpm-slider.html',
  styleUrl: './bpm-slider.css',
})
export class BpmSlider {
  disabled = false;
  bpmMax = 250;
  bpmMin = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;

  currentBpm = input.required<number>();
  bpmChange = output<number>();
}
