import { Component } from '@angular/core';
import { BpmSlider } from '../../components/bpm-slider/bpm-slider';
import { TrackList } from '../../components/track-list/track-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BpmSlider, TrackList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
