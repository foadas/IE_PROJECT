import { Body, Controller, Get, Post, Render } from "@nestjs/common";
import { TrackService } from "./track.service";

@Controller('tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}
  @Get()
  @Render('tracks')
  async getTracks() {
    const tracks = await this.trackService.getTracks();
    return { tracks };
  }
  @Post()
  async FilterTracks(@Body() data: { type: string; search: string }) {
    return await this.trackService.FilterTracks(data.type, data.search);
  }
}
