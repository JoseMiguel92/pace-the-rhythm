import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { BpmSlider } from '../../components/bpm-slider/bpm-slider';
import { TrackList } from '../../components/track-list/track-list';
import { TrackService } from '../../services/track.service';
import { debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BpmSlider, TrackList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  private trackService = inject(TrackService);

  bpm = signal<number>(125);
  tracks = toSignal(
    toObservable(this.bpm).pipe(
      debounceTime(500),
      switchMap((bpm) => this.trackService.getByBpm(bpm)),
    ),
    { initialValue: [] },
  );

  constructor() {}
}
