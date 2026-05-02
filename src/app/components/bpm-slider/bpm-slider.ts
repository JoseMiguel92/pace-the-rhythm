import { Component, computed, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BPM_ZONES, BpmZone } from './bpm-zone';
import { NgClass } from '@angular/common';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'bpm-slider',
  imports: [MatSliderModule, FormsModule, NgClass,DecimalPipe],
  templateUrl: './bpm-slider.html',
  styleUrl: './bpm-slider.css',
})
export class BpmSliderComponent {
  disabled = false;
  bpmMax = 220;
  bpmMin = 155;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  readonly presetMarks = [
    { value: 160, label: 'Easy Run' },
    { value: 170, label: 'Base' },
    { value: 175, label: 'Tempo' },
    { value: 185, label: 'Sprint' },
  ];

  currentBpm = input.required<number>();
  bpmChange = output<number>();

  bpmZone = computed<BpmZone>(() => {
    const bpm = this.currentBpm();
    return (BPM_ZONES.find((z) => bpm <= z.max) ?? BPM_ZONES.at(-1)!).zone;
  });

  toPercent(value: number): number {
    return ((value - this.bpmMin) / (this.bpmMax - this.bpmMin)) * 100;
  }
}
