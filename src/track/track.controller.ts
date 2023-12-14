import { Controller, Get } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}
  @Get()
  async getTracks() {
    return await this.trackService.getTracks();
  }
}
