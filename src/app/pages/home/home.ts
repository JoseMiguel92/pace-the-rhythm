import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { BpmSliderComponent } from '../../components/bpm-slider/bpm-slider';
import { TrackListComponent } from '../../components/track-list/track-list';
import { TrackService } from '../../services/track.service';
import { debounceTime, switchMap } from 'rxjs';
import { PaceComponent } from "../../components/pace/pace";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BpmSliderComponent, TrackListComponent, PaceComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  private trackService = inject(TrackService);

  bpm = signal<number>(160);
  tracks = toSignal(
    toObservable(this.bpm).pipe(
      debounceTime(500),
      switchMap((bpm) => this.trackService.getByBpm(bpm)),
    ),
    { initialValue: [] },
  );

  constructor() {}
}
