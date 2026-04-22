import { Artist } from "./artist";

export interface TrackItem{
  id: number;
  songName: string;
  artists: Artist[];
}
