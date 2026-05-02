import { TrackItem } from "./track-items.model";

export interface HomeView {
  isLoading: boolean;
  tracks: TrackItem[];
}
