import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artist } from '../model/artist';
import { TrackItem } from '../model/track-items';

@Injectable({ providedIn: 'root' })
export class TrackService {
  private http = inject(HttpClient);

  getByBpm(bpm: number): Observable<TrackItem[]> {
    //return this.http.get<TrackItem[]>(`/api/tracks?bpm=${bpm}`);
    var trackList: TrackItem[] = [];
    for (let index = 0; index < 10; index++) {
      var artistOne: Artist = { id: index, name: 'bbb' };
      var trackItem: TrackItem = { id: index, songName: bpm.toString(), artists: [artistOne] };
      trackList.push(trackItem);
    }
    return of(trackList);
  }
}
