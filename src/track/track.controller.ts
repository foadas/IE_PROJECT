import { Controller, Get, Render } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}
  @Get()
  @Render('tracks')
  async getTracks() {
    const tracks = await this.trackService.getTracks();
    return { tracks };
  }
}
