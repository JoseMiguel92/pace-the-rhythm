import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { concat, debounceTime, finalize, map, of, switchMap } from 'rxjs';
import { BpmSliderComponent } from '../../components/bpm-slider/bpm-slider';
import { PaceComponent } from '../../components/pace/pace';
import { TrackListComponent } from '../../components/track-list/track-list';
import { HomeView } from '../../model/home-view.model';
import { TrackItem } from '../../model/track-items.model';
import { TrackService } from '../../services/track.service';

const INITIAL_VM: HomeView = { isLoading: true, tracks: [] };

@Component({
  selector: 'home',
  standalone: true,
  imports: [BpmSliderComponent, TrackListComponent, PaceComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  private trackService = inject(TrackService);

  bpm = signal<number>(160);
  readonly homeView = toSignal(
    toObservable(this.bpm).pipe(
      debounceTime(500),
      switchMap(bpm =>
        concat(
          of(INITIAL_VM),
          this.trackService.getByBpm(bpm).pipe(
            map(tracks => ({ isLoading: false, tracks }))
          )
        )
      )
    ),
    { initialValue: INITIAL_VM }
  );

  constructor() {}
}
