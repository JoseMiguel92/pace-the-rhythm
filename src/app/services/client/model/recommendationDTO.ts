import { ArtistDTO } from "./artistDTO";

export interface RecommendationDTO {
  id?:                 string;
  trackTitle?:         string;
  artists?:            ArtistDTO[];
  durationMs?:         number;
  isrc?:               string;
  ean?:                null;
  upc?:                null;
  href?:               string;
  availableCountries?: string;
  popularity?:         number;
}
