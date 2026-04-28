import { Controller, Get, Query } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get()
  getMusic(
    @Query('mood') mood?: string,
    @Query('genre') genre?: string,
  ) {
    return this.musicService.getMusicSelection(mood, genre);
  }
}
