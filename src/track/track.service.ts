import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tracks } from "../database/entities/Tracks.entity";
import { ILike, Like, MoreThanOrEqual, Repository } from "typeorm";
import { json2csv } from 'json-2-csv';
import * as createCsvWriter from 'csv-writer';
import * as fs from 'fs';
@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Tracks) private trackRepo: Repository<Tracks>){}

  async getTracks() {
    return await this.trackRepo.find();
  }
  public async FilterTracks(type, search) {
    const whereCondition = {};
    if (type === 'trackId') {
      search = Number(search);
      whereCondition[type] = search;
    } else if (type === 'durations_ms') {
      search = Number(search);
      whereCondition[type] = MoreThanOrEqual(search);
    } else {
      whereCondition[type] = ILike(`%${search}%`);
    }
    return await this.trackRepo.find({ where: whereCondition });
  }
  public async SaveCsv(type, search, fileName){
    const data = await this.FilterTracks(type, search);
    await this.writeToCsv(data, fileName);
  }
  async writeToCsv(data: any[], fileName: string): Promise<void> {
    const filePath = `src/csvDir/${fileName}.csv`;
    if (fs.existsSync(filePath)) {
      throw new HttpException(
        `File ${fileName}.csv already exists.`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const csvWriter = createCsvWriter.createObjectCsvWriter({
      path: filePath,
      header: [
        { id: 'id', title: 'id' },
        { id: 'trackId', title: 'trackId' },
        { id: 'names', title: 'names' },
        { id: 'artist_names', title: 'artist_names' },
        { id: 'artist_pop', title: 'artist_pop' },
        { id: 'albums', title: 'albums' },
        { id: 'track_pop', title: 'track_pop' },
        { id: 'durations_ms', title: 'durations_ms' },
        { id: 'playlist_name', title: 'playlist_name' },
      ],
    });

    await csvWriter.writeRecords(data);
  }
}
