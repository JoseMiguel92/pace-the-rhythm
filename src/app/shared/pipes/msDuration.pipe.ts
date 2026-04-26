import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'msDuration', standalone: true })
export class MsDurationPipe implements PipeTransform {
  transform(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}
