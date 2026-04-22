import { Component, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TrackItem } from '../../model/track-items';

@Component({
  selector: 'track-list',
  imports: [MatListModule],
  templateUrl: './track-list.html',
  styleUrl: './track-list.css',
})
export class TrackList {
  tracks = input.required<TrackItem[]>();

  constructor() {}
}
