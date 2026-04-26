import { TrackItem } from '../../model/track-items.model';
import { RecommendationDTO } from '../client/model/recommendationDTO';
import { ArtistMapper } from './artist.mapper';

export class RecommendationMapper {
  static toDomain(recommendationDto: RecommendationDTO) : TrackItem {
    return {
      id: recommendationDto.id ?? "",
      trackTitle: recommendationDto.trackTitle ?? "",
      artists: ArtistMapper.toDomainList(recommendationDto.artists ?? []),
      durationMs: recommendationDto.durationMs ?? 0,
      href: recommendationDto.href ?? ""
    };
  }

  static toDomainList(listDto: RecommendationDTO[]): TrackItem[] {
    if (!Array.isArray(listDto)) {
    throw new TypeError(`Expected array, got ${typeof listDto}`);
  }
    return listDto.map((recommendationDto) => this.toDomain(recommendationDto));
  }
}
