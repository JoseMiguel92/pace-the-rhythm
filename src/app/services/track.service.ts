import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Artist } from '../model/artist.model';
import { TrackItem } from '../model/track-items.model';
import { RecommendationDTO } from './client/model/recommendationDTO';
import { RecommendationMapper } from './mapper/recommendation.mapper';
import { ArtistDTO } from './client/model/artistDTO';

@Injectable({ providedIn: 'root' })
export class TrackService {
  private http = inject(HttpClient);
  private baseUrl: string = 'https://api.reccobeats.com/v1';

  getByBpm(bpm: number): Observable<TrackItem[]> {
    let recommendationsUrl = `${this.baseUrl}/track/recommendation?size=10&seeds=878dadea-33c5-4c08-bdb9-e2b117475a99&tempo=${bpm}&popularity=100`;
    // return this.http
    //   .get<{ content: RecommendationDTO[] }>(recommendationsUrl)
    //   .pipe(map((response) => RecommendationMapper.toDomainList(response.content)));

      let artist : ArtistDTO = {
        id: "1",
        name: "Artist Name",
        href: "http://spotifyUrl.com/ArtistName"
      };
      let recommendationItem : RecommendationDTO = {
        id: "1",
        trackTitle: "aaa",
        artists: [artist],
        durationMs: 10000,
        href: "http://spotifyUrl.com/Aaa"
      }
    return of(RecommendationMapper.toDomainList([recommendationItem,recommendationItem]));
  }
}
