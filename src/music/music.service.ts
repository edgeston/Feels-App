import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicService {
  getMusicSelection(mood?: string, genre?: string) {
    const message = genre
      ? `Showing ${genre} music for a ${mood ?? 'any'} mood.`
      : mood
        ? `Showing music for a ${mood} mood (no genre filter).`
        : 'Pass mood in the URL query string. Genre is optional.';

    return {
      endpoint: '/music',
      mood: mood ?? null,
      genre: genre ?? null,
      message,
      exampleUrl: '/music?mood=happy&genre=pop',
    };
  }
}
