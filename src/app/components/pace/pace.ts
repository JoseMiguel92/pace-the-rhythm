import { Component, effect, input, output, signal } from '@angular/core';
import { bpmToPace, paceToBpm } from './utils/pace.utils';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pace',
  imports: [FormsModule],
  templateUrl: './pace.html',
  styleUrl: './pace.css',
})
export class PaceComponent {
  currentBpm = input.required<number>();
  bpmChange = output<number>();
  minutes = signal<number>(0);
  seconds = signal<number>(0);
  private editing = signal<boolean>(false);

  constructor() {
    effect(() => {
      if (!this.editing()) {
        const { minutes, seconds } = bpmToPace(this.currentBpm());
        this.minutes.set(minutes);
        this.seconds.set(seconds);
      }
    });
  }

  onFocus(): void {
    this.editing.set(true);
  }

  onBlur(): void {
    this.editing.set(false);
    this.bpmChange.emit(paceToBpm(this.minutes(), this.seconds()));
  }
}
