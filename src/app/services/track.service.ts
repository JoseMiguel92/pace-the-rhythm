import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { TrackItem } from '../model/track-items.model';
import { BPM_ZONES } from '../shared/constants/bpm.constants';
import { RecommendationDTO } from './client/model/recommendationDTO';
import { RecommendationMapper } from './mapper/recommendation.mapper';

@Injectable({ providedIn: 'root' })
export class TrackService {
  private http = inject(HttpClient);
  private baseUrl: string = 'https://api.reccobeats.com/v1';

  getByBpm(bpm: number): Observable<TrackItem[]> {
    let size: number = 10;
    let seeds: string[] = this.getSeeds(bpm);
    let popularity: number = 100;
    let energy: number = 1;
    let valence: number = 1;
    let danceability: number = 1;
    let recommendationsUrl: string = `${this.baseUrl}/track/recommendation?size=${size}
    &tempo=${bpm}
    &popularity=${popularity}
    &energy=${energy}
    &valence=${valence}
    &danceability=${danceability}
    `;
    for (var seedItem of seeds) {
      recommendationsUrl = recommendationsUrl + `&seeds=${seedItem}`;
    }
    return this.http.get<{ content: RecommendationDTO[] }>(recommendationsUrl).pipe(
      map((response) => RecommendationMapper.toDomainList(response.content)),
      catchError((error) => {
        console.error('Failed to fetch recommendations', error);
        return of([]);
      }),
    );
  }

  getSeeds(bpm: number): string[] {
    let seeds: string[] = [];
    for (var item of BPM_ZONES) {
      if (item.max >= bpm) {
        seeds = item.zone.seeds;
        break;
      }
    }
    return seeds;
  }
}
