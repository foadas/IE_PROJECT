import { Command, CommandRunner } from 'nest-commander';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tracks } from '../database/entities/Tracks.entity';
import * as csv from 'csvtojson';
@Command({ name: 'csvtojson' })
export class CsvtojsonCommand extends CommandRunner {
  constructor(
    @InjectRepository(Tracks)
    private readonly tracksRepo: Repository<Tracks>,
  ) {
    super();
  }
  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    this.getDataFromCsv();
  }

  private async getDataFromCsv() {
    const csvData = await csv().fromFile('src/csvDir/tracks.csv');
    await this.addToDb(csvData);
  }


  private async addToDb(csv) {
    for (const item of csv) {
      const track = await this.tracksRepo.findOne({
        where: {
          trackId: item.id,
        },
      });
      if (!track) {
        const track = this.tracksRepo.create({
          trackId: item.id,
          names: item.names,
          artist_names: item.artist_names,
          albums: item.albums,
          track_pop: item.track_pop,
          durations_ms: item.durations_ms,
          playlist_name: item.playlist_name,
        });
        await this.tracksRepo.save(track);
      }
    }
  }
}