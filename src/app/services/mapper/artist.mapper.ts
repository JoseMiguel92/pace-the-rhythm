import { Artist } from "../../model/artist.model";
import { ArtistDTO } from "../client/model/artistDTO";

export class ArtistMapper {


  static toDomain(artistDto: ArtistDTO): Artist {
    return {
      id: artistDto.id,
      name: artistDto.name,
      spotifyLink:artistDto.href
    };
  }

  static toDomainList(list: ArtistDTO[]): Artist[] {
    return list.map(artist => this.toDomain(artist));
  }

  static toDTO(artist: Artist): ArtistDTO {
    return {
      id: artist.id,
      name: artist.name,
      href: ''
    };
  }
}
