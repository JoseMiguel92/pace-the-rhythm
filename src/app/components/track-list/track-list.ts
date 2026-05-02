import { Component, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TrackItem } from '../../model/track-items.model';
import { MsDurationPipe } from "../../shared/pipes/msDuration.pipe";
import { ArtistListPipe } from "../../shared/pipes/artistList.pipe";

@Component({
  selector: 'track-list',
  imports: [MatListModule, MsDurationPipe, ArtistListPipe],
  templateUrl: './track-list.html',
  styleUrl: './track-list.css',
})
export class TrackListComponent {
  isLoading = input<boolean>(false);
  tracks = input.required<TrackItem[]>();

  constructor() {}
}
