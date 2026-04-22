<<<<<<< HEAD
import { Artist } from "./artist.model";

export interface TrackItem{
  id: string;
  trackTitle: string;
=======
import { Artist } from "./artist";

export interface TrackItem{
  id: number;
  songName: string;
>>>>>>> c0d934a (feat: add home page with main dumb components)
  artists: Artist[];
}
