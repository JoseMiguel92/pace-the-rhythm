import { Artist } from './artist.model';

export interface TrackItem {
  id: string;
  trackTitle: string;
  artists: Artist[];
  durationMs: number;
  href: string;
}
