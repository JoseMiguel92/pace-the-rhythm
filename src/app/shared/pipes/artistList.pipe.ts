import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'artistList', standalone: true })
export class ArtistListPipe implements PipeTransform {
  transform(artists: { name: string }[], limit = 3): string {
    const visible = artists
      .slice(0, limit)
      .map((a) => a.name)
      .join(', ');
    return artists.length > limit ? `${visible}, ...` : visible;
  }
}
